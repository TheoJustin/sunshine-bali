import Time "mo:base/Time";
import TrieMap "mo:base/TrieMap";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Blob "mo:base/Blob";
import Vector "mo:vector/Class";
import UUID "mo:uuid/UUID";
import Source "mo:uuid/async/SourceV4";
import Nat "mo:base/Nat";

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
    sender : Principal;
    category : Text;
    timestamp : Time.Time;
    images : [Text];
    comments: [Text];
    positive: Nat;
    negative: Nat;
    positiveVotes: Nat;
    negativeVotes: Nat;
    likes: [Principal];
  };

  type Comment = {
    id: Text;
    sender: Principal;
    comment: Text;
  };

  type Friend = {
    id : Text;
    user1 : Principal;
    user2 : Principal;
  };

  let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);
  let posts = TrieMap.TrieMap<Text, Post>(Text.equal, Text.hash);
  let friends = TrieMap.TrieMap<Text, Friend>(Text.equal, Text.hash);

  public func generateUUID() : async Text {
    let g = Source.Source();
    return UUID.toText(await g.new());
  };

  public query func getPfp(userId : Principal) : async Text {
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

  public func register(userId : Principal, name : Text, username : Text, email : Text, description : Text, dob : Text, profileUrl : Text) : async Bool {

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

  public query func getAllUsers() : async Result.Result<[User], Text> {

    var allUsers = Vector.Vector<User>();

    for (user in users.vals()) {
      allUsers.add(user);
    };

    return #ok(Vector.toArray(allUsers));
  };

 

};
