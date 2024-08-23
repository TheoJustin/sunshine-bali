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
        likes : [Principal];
    };

    let users = TrieMap.TrieMap<Principal, User>(Principal.equal, Principal.hash);
    let posts = TrieMap.TrieMap<Text, Post>(Text.equal, Text.hash);
    // let friends = TrieMap.TrieMap<Text, Friend>(Text.equal, Text.hash);

    type Comment = {
        id : Text;
        sender : Principal;
        comment : Text;
    };
    let comments = TrieMap.TrieMap<Text, Comment>(Text.equal, Text.hash);
    public shared func generateUUID() : async Text {
        let g = Source.Source();
        return UUID.toText(await g.new());
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

    // shared func triggerTimer

    // shared func makeComment(userId : Principal, currPost : Text, newComment : Text, sentiment : Text) : async Result.Result<Comment, Text> {
    //     let newId = generateUUID();
    //     let postId = currPost;
    //     let user_id = userId;
    //     if (Principal.isAnonymous(user_id)) {
    //         return #err("Unauthorized");
    //     };
    //     let currUser = await getUserById(user_id);
    //     switch (currUser) {
    //         case (#ok(currUser)) {
    //             let comment : Comment = {
    //                 id = newId;
    //                 sender = user_id;
    //                 comment = newComment;
    //             };
    //             let post = await getPostById(postId);
    //             switch (post) {
    //                 case (#ok(post)) {
    //                     let comments = post.comments;
    //                     let newComments = Array.append<Text>(comments, [comment.id]);
    //                     let newPositive = post.positive;
    //                     let newNegative = post.negative;
    //                     let newVotingTriggered = post.votingTriggered;
    //                     if (sentiment == "Positive") {
    //                         newPositive += 1;
    //                     }
    //                     else if (sentiment == "Negative"){
    //                         newNegative += 1;
    //                     };
    //                     if(newPositive + newNegative >= 3){
                            
    //                         if(newNegative > newPositive){
    //                             if(newVotingTriggered == false){
    //                                 triggerTimer(currPost);
    //                             };
    //                             newVotingTriggered := true;
    //                         }
                            
    //                     };
    //                     let newPost : Post = {
    //                         id = post.id;
    //                         description : post.description;
    //                         sender : post.sender;
    //                         category : post.category;
    //                         timestamp : post.timestamp;
    //                         images : post.images;
    //                         comments : newComments;
    //                         positive : newPositive;
    //                         negative : newNegative;
    //                         positiveVotes : post.positiveVotes;
    //                         negativeVotes : post.negativeVotes;
    //                         votingTriggered : newVotingTriggered;
    //                         likes : post.likes;
    //                     };
    //                     posts.put(postId, newPost);
                        
    //                 };
    //                 case (#err(msg)) {
    //                     return #err("Post error");
    //                 };
    //             };
    //             comments.put(newId, chat);
    //             return #ok(chat);

    //         };
    //         case (#err(error)) {
    //             return #err("not found!");
    //         };
    //     };
    // };
};
