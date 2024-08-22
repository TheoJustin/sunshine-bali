import Time "mo:base/Time";
import TrieMap "mo:base/TrieMap";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";

actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  type User = {
    id : Principal;
    name : Text;
    email : Text;
    birth_date : Text;
    timestamp : Time.Time;
    profileUrl : Text;
    posts : [Text];
  };
  let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);

  type Post = {
    id : Text;
    description : Text;
    creatorUser : Principal;
    category : Text;
    timestamp : Time.Time;
    groupMembers : [Principal];
    images : [Text];
  };

  let posts = TrieMap.TrieMap<Text, Post>(Text.equal, Text.hash);

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
};
