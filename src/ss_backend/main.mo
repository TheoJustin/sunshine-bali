import Time "mo:base/Time";
import TrieMap "mo:base/TrieMap";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Vector "mo:vector/Class";

actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  type User = {
    id : Principal;
    name : Text;
    email : Text;
    username : Text;
    description : Text;
    dob : Text;
    timestamp : Time.Time;
    profileUrl : Text;
    posts : [Text];
  };

  type Post = {
    id : Text;
    description : Text;
    sender: Text;
    category : Text;
    timestamp : Time.Time;
    images : [Text];
  };

  type Friend = {
    id : Text;
    user1 : Principal;
    user2 : Principal;
  };

  let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);
  let posts = TrieMap.TrieMap<Text, Post>(Text.equal, Text.hash);
  let friends = TrieMap.TrieMap<Text, Friend>(Text.equal, Text.hash);

  public shared query func getPfp(userId : Principal) : async Text {
    let user : ?User = users.get(userId);
    switch (user) {
      case (?user) {
        return user.profileUrl;
      };
      case (null) {
        return "Stranger";
      };

    };
  };

  public shared func register(userId : Principal, name : Text, username : Text, email : Text, description : Text, dob : Text, profileUrl : Text) : async Bool {

    if (users.get(userId) != null) {
      return false;
    };

    let user : User = {
      id = userId;
      name = name;
      username = username;
      email = email;
      description = description;
      dob = dob;
      profileUrl = profileUrl;
      timestamp = Time.now();
      posts = [];
    };

    users.put(user.id, user);

    return true;
  };

  public query func getUserById(userId : Principal) : async Result.Result<User, Text> {
    let user = users.get(userId);
    switch (user) {
      case (?user) {
        return #ok(user);
      };
      case (null) {
        return #err("User not found!");
      };
    };
  };

  public shared query func getAllUsers() : async Result.Result<[User], Text> {

    var allUsers = Vector.Vector<User>();

    for (user in users.vals()) {
      allUsers.add(user);
    };

    return #ok(Vector.toArray(allUsers));
  };

  //  post

};
