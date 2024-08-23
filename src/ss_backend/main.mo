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
import Array "mo:base/Array";
import { print } = "mo:base/Debug";
import { abs } = "mo:base/Int";
import { now } = "mo:base/Time";
import { setTimer; recurringTimer } = "mo:base/Timer";

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
    comments : [Text];
    positive : Nat;
    negative : Nat;
    positiveVotes : Nat;
    negativeVotes : Nat;
    votingTriggered : Bool;
    voters : [Principal];
    investors : [Principal];
    likes : [Principal];
  };

  type Comment = {
    id : Text;
    sender : Principal;
    comment : Text;
  };

  type Friend = {
    id : Text;
    user1 : Principal;
    user2 : Principal;
  };

  let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);
  let posts = TrieMap.TrieMap<Text, Post>(Text.equal, Text.hash);
  let friends = TrieMap.TrieMap<Text, Friend>(Text.equal, Text.hash);
  let comments = TrieMap.TrieMap<Text, Comment>(Text.equal, Text.hash);

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

  public query func getCommentById(commentId : Text) : async Result.Result<Comment, Text> {
    let comment = comments.get(commentId);
    switch (comment) {
      case (?comment) {
        return #ok(comment);
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

  public func getAllCommentsAccordingToPost(post : Post) : async Result.Result<[Comment], Text> {

    let commentIds = post.comments;
    var allComments = Vector.Vector<Comment>();
    for (commentId in commentIds.vals()) {
      let comment = await getCommentById(commentId);
      switch (comment) {
        case (#ok(comment)) {
          allComments.add(comment);
        };
        case (#err(msg)) {

        };
      };
    };

    return #ok(Vector.toArray(allComments));
  };

  //  post
  public func createPost(userId : Principal, description : Text, images : [Text]) : async Bool {
    let newId = await generateUUID();

    let currUser = await getUserById(userId);

    // id : Text;
    // description : Text;
    // sender : Principal;
    // category : Text;
    // timestamp : Time.Time;
    // images : [Text];
    // comments: [Text];
    // positive: Nat;
    // negative: Nat;
    // positiveVotes: Nat;
    // negativeVotes: Nat;
    // likes: [Principal];

    switch (currUser) {
      case (#ok(currUser)) {
        let post : Post = {
          id = newId;
          description = description;
          sender = userId;
          category = "";
          timestamp = Time.now();
          images = images;
          comments = [];
          positive = 0;
          negative = 0;
          positiveVotes = 0;
          negativeVotes = 0;
          votingTriggered = false;
          voters = [];
          investors = [];
          likes = [];
        };

        posts.put(newId, post);
      };

      case (#err(_error)) {
        return false;
      };
    };

    return true;
  };

  public query func getAllPosts() : async Result.Result<[Post], Text> {

    var tempPosts = Vector.Vector<Post>();

    for (post in posts.vals()) {
      tempPosts.add(post);
    };

    return #ok(Vector.toArray(tempPosts));
  };

  public query func getPostById(postId : Text) : async Result.Result<Post, Text> {
    let post = posts.get(postId);
    switch (post) {
      case (?post) {
        return #ok(post);
      };
      case (null) {
        return #err("Post not found!");
      };
    };
  };

  // public func triggerTimer(postId: Text) : async Result.Result<Comment, Text>{

  // };
  // let solarYearSeconds = 356_925_216;

  // private func remind() : async () {
  //   print("Happy New Year!");
  // };

  // ignore setTimer<system>(
  //   #seconds(solarYearSeconds - abs(now() / 1_000_000_000) % solarYearSeconds),
  //   func() : async () {
  //     ignore recurringTimer<system>(#seconds solarYearSeconds, remind);
  //     await remind();
  //   },
  // );

  // system func timer(setGlobalTimer : Nat64 -> ()) : async () {
  //   let next = Nat64.fromIntWrap(Time.now()) + 20_000_000_000;
  //   setGlobalTimer(next); // absolute time in nanoseconds
  //   print("Tick!");
  // };

  public func votePost(userId : Principal, currPost : Text, sentiment : Text) : async Result.Result<Text, Text> {
    let postId = currPost;
    let user_id = userId;
    if (Principal.isAnonymous(user_id)) {
      return #err("Unauthorized");
    };
    let currUser = await getUserById(user_id);
    switch (currUser) {
      case (#ok(currUser)) {
        let post = await getPostById(postId);
        switch (post) {
          case (#ok(post)) {
            var newPositive = post.positiveVotes;
            var newNegative = post.negativeVotes;
            if (sentiment == "Yes") {
              newPositive += 1;
            } else if (sentiment == "No") {
              newNegative += 1;
            };
            if (newPositive + newNegative >= 3) {

              if (newNegative > newPositive) {
                posts.delete(currPost);
                return #ok("Deleted since many bad votes");
              };

            };
            let newPost : Post = {
              id = post.id;
              description = post.description;
              sender = post.sender;
              category = post.category;
              timestamp = post.timestamp;
              images = post.images;
              comments = post.comments;
              positive = post.positive;
              negative = post.negative;
              positiveVotes = newPositive;
              negativeVotes = newNegative;
              votingTriggered = post.votingTriggered;
              investors = post.investors;
              voters = post.voters;
              likes = post.likes;
            };
            posts.put(postId, newPost);
          };
          case (#err(msg)) {
            return #err("Post error");
          };
        };
        // comments.put(newId, comment);
        return #ok("Voted");

      };
      case (#err(error)) {
        return #err("not found!");
      };
    };
  };
  // public func votePost(userId : Principal, currPost : Text, sentiment: Text) : async Result.Result<Text, Text> {
  //   let postId = currPost;
  //   let user_id = userId;
  //   if (Principal.isAnonymous(user_id)) {
  //     return #err("Unauthorized");
  //   };
  //   let currUser = await getUserById(user_id);
  //   switch (currUser) {
  //     case (#ok(currUser)) {
  //       let post = await getPostById(postId);
  //       switch (post) {
  //         case (#ok(post)) {
  //           let likers = post.likes;
  //           let oldLikers : Vector.Vector<Principal> = Vector.fromArray(post.likes);
  //           let index = Vector.indexOf<Principal>(user_id, oldLikers, Principal.equal);
  //           switch (index) {
  //             case (?index) {
  //               let newLikers = Array.append<Principal>(Array.subArray<Principal>(likers, 0, index), Array.subArray<Principal>(likers, index +1, oldLikers.size() - index - 1));
  //               let newPost : Post = {
  //                 id = post.id;
  //                 description = post.description;
  //                 sender = post.sender;
  //                 category = post.category;
  //                 timestamp = post.timestamp;
  //                 images = post.images;
  //                 comments = post.comments;
  //                 positive = post.positive;
  //                 negative = post.negative;
  //                 positiveVotes = post.positiveVotes;
  //                 negativeVotes = post.negativeVotes;
  //                 votingTriggered = post.votingTriggered;
  //                 investors = post.investors;
  //                 voters = post.voters;
  //                 likes = newLikers;
  //               };
  //               posts.put(postId, newPost);
  //               return #ok("Unliked");
  //             };
  //             case (null) {
  //               let newLikers = Array.append<Principal>(likers, [user_id]);
  //               let newPost : Post = {
  //                 id = post.id;
  //                 description = post.description;
  //                 sender = post.sender;
  //                 category = post.category;
  //                 timestamp = post.timestamp;
  //                 images = post.images;
  //                 comments = post.comments;
  //                 positive = post.positive;
  //                 negative = post.negative;
  //                 positiveVotes = post.positiveVotes;
  //                 negativeVotes = post.negativeVotes;
  //                 votingTriggered = post.votingTriggered;
  //                 investors = post.investors;
  //                 voters = post.voters;
  //                 likes = newLikers;
  //               };
  //               posts.put(postId, newPost);
  //               return #ok("Liked");
  //             };
  //           };
  //         };
  //         case (#err(msg)) {
  //           return #err("Post error");
  //         };
  //       };
  //       // comments.put(newId, comment);

  //     };
  //     case (#err(error)) {
  //       return #err("not found!");
  //     };
  //   };
  // };

  public func likePost(userId : Principal, currPost : Text) : async Result.Result<Text, Text> {
    let postId = currPost;
    let user_id = userId;
    if (Principal.isAnonymous(user_id)) {
      return #err("Unauthorized");
    };
    let currUser = await getUserById(user_id);
    switch (currUser) {
      case (#ok(currUser)) {
        let post = await getPostById(postId);
        switch (post) {
          case (#ok(post)) {
            let likers = post.likes;
            let oldLikers : Vector.Vector<Principal> = Vector.fromArray(post.likes);
            let index = Vector.indexOf<Principal>(user_id, oldLikers, Principal.equal);
            switch (index) {
              case (?index) {
                let newLikers = Array.append<Principal>(Array.subArray<Principal>(likers, 0, index), Array.subArray<Principal>(likers, index +1, oldLikers.size() - index - 1));
                let newPost : Post = {
                  id = post.id;
                  description = post.description;
                  sender = post.sender;
                  category = post.category;
                  timestamp = post.timestamp;
                  images = post.images;
                  comments = post.comments;
                  positive = post.positive;
                  negative = post.negative;
                  positiveVotes = post.positiveVotes;
                  negativeVotes = post.negativeVotes;
                  votingTriggered = post.votingTriggered;
                  investors = post.investors;
                  voters = post.voters;
                  likes = newLikers;
                };
                posts.put(postId, newPost);
                return #ok("Unliked");
              };
              case (null) {
                let newLikers = Array.append<Principal>(likers, [user_id]);
                let newPost : Post = {
                  id = post.id;
                  description = post.description;
                  sender = post.sender;
                  category = post.category;
                  timestamp = post.timestamp;
                  images = post.images;
                  comments = post.comments;
                  positive = post.positive;
                  negative = post.negative;
                  positiveVotes = post.positiveVotes;
                  negativeVotes = post.negativeVotes;
                  votingTriggered = post.votingTriggered;
                  investors = post.investors;
                  voters = post.voters;
                  likes = newLikers;
                };
                posts.put(postId, newPost);
                return #ok("Liked");
              };
            };
          };
          case (#err(msg)) {
            return #err("Post error");
          };
        };
        // comments.put(newId, comment);

      };
      case (#err(error)) {
        return #err("not found!");
      };
    };
  };
  
  

  public func isVoted(userId : Principal, currPost : Text) : async Bool {
    let post = await getPostById(currPost);
    switch (post) {
      case (#ok(post)) {
        let voters : Vector.Vector<Principal> = Vector.fromArray(post.voters);
        let isVoted = Vector.indexOf<Principal>(userId, voters, Principal.equal);
        // posts.put(postId, newPost);
        switch (isVoted) {
          case (null) {
            return false;
          };
          case (?isVoted) {
            return true;
          };
        };
      };
      case (#err(msg)) {
        return false;
      };
    };
  };

  public func isLiked(userId : Principal, currPost : Text) : async Bool {
    let post = await getPostById(currPost);
    switch (post) {
      case (#ok(post)) {
        let likers : Vector.Vector<Principal> = Vector.fromArray(post.likes);
        let isLiker = Vector.indexOf<Principal>(userId, likers, Principal.equal);
        // posts.put(postId, newPost);
        switch (isLiker) {
          case (null) {
            return false;
          };
          case (?isLiker) {
            return true;
          };
        };
      };
      case (#err(msg)) {
        return false;
      };
    };
  };

  public func makeComment(userId : Principal, currPost : Text, newComment : Text, sentiment : Text) : async Result.Result<Comment, Text> {
    let newId = await generateUUID();
    let postId = currPost;
    let user_id = userId;
    if (Principal.isAnonymous(user_id)) {
      return #err("Unauthorized");
    };
    let currUser = await getUserById(user_id);
    switch (currUser) {
      case (#ok(currUser)) {
        let comment : Comment = {
          id = newId;
          sender = user_id;
          comment = newComment;
        };
        let post = await getPostById(postId);
        switch (post) {
          case (#ok(post)) {
            let comments = post.comments;
            let newComments = Array.append<Text>(comments, [comment.id]);
            var newPositive = post.positive;
            var newNegative = post.negative;
            var newVotingTriggered = post.votingTriggered;
            if (sentiment == "Positive") {
              newPositive += 1;
            } else if (sentiment == "Negative") {
              newNegative += 1;
            };
            if (newPositive + newNegative >= 3) {

              if (newNegative > newPositive) {
                if (newVotingTriggered == false) {
                  // triggerTimer(currPost);
                };
                newVotingTriggered := true;
              };

            };
            let newPost : Post = {
              id = post.id;
              description = post.description;
              sender = post.sender;
              category = post.category;
              timestamp = post.timestamp;
              images = post.images;
              comments = newComments;
              positive = newPositive;
              negative = newNegative;
              positiveVotes = post.positiveVotes;
              negativeVotes = post.negativeVotes;
              votingTriggered = newVotingTriggered;
              investors = post.investors;
              voters = post.voters;
              likes = post.likes;
            };
            posts.put(postId, newPost);

          };
          case (#err(msg)) {
            return #err("Post error");
          };
        };
        comments.put(newId, comment);
        return #ok(comment);

      };
      case (#err(error)) {
        return #err("not found!");
      };
    };
  };
};
