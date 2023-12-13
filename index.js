// // Profile Picture Upload
// const profilePicInput = document.getElementById('profilePicInput');
// const profilePicPreview = document.getElementById('profilePicPreview');

// profilePicInput.addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     if (file) {
//         profilePicPreview.src = URL.createObjectURL(file);
//     }
// });

// // Post Creation
// const postButton = document.getElementById('postButton');
// const postContent = document.getElementById('postContent');

// postButton.addEventListener('click', function() {
//     const postText = postContent.value;
//     if (postText) {
//         const newPost = document.createElement('div');
//         newPost.classList.add('post');
//         newPost.innerHTML = `<p>${postText}</p>
//             <button class="likeButton">Like</button>
//             <div class="comments">
//                 <input type="text" placeholder="Add a comment..." class="commentInput">
//                 <button class="commentButton">Comment</button>
//             </div>`;
//         document.body.appendChild(newPost);
//         postContent.value = '';
//     }
// });

// // Like and Comment
// document.body.addEventListener('click', function(event) {
//     if (event.target.classList.contains('likeButton')) {
//         // const likeButton = ;
//         event.target.classList.toggle('liked');
//         if(event.target.innerHTML==='Like')
//             event.target.innerHTML='Liked'
//         else
//             event.target.innerHTML='Like';
//     }

//     if (event.target.classList.contains('commentButton')) {
//         const commentInput = event.target.previousElementSibling;
//         const commentText = commentInput.value;
//         if (commentText) {
//             const newComment = document.createElement('p');
//             newComment.textContent = commentText;
//             event.target.parentElement.appendChild(newComment);
//             commentInput.value = '';
//         }
//     }
// });

const postButton=document.getElementById('submit-post');
const postContent=document.getElementById('postInput');
const postList=document.getElementById('postedList');
const profileInput=document.getElementById('profileInput');
const profilePic=document.getElementById('profile_pic');

postButton.addEventListener('click',addPost);
postList.addEventListener('click',postReactions);
profileInput.addEventListener('change',updateProfile);
function addPost(){
    if(postContent.value){
        const newPost=document.createElement('div');
    newPost.classList.add('post-item');
    newPost.innerHTML=`<p>${postContent.value}</p>
    <button class="btn like">Like</button>
                    <br><br>
                    <h3>Comment section</h3>
                    <div class="comment-item">
                        <input type="text" value="">
                        <button type="submit" class="submit-comment">Comment</button>
                        
                    </div>
                    
                    <div class="comments">
                        
                    </div>`;
    console.log('posted');
    
   postContent.value='';
   postList.insertAdjacentElement('afterbegin',newPost);
    }
    else{
        alert('please enter something');
    }

}

function postReactions(event){
    if(event.target.classList.contains('submit-comment')){
        
        
        const commentList=event.target.parentElement.nextElementSibling;
        const commentContent=event.target.previousElementSibling;
        if(commentContent.value){
            const newComment=document.createElement('div');
        newComment.innerHTML=`<p>${commentContent.value}</p>
        <button class="btn like">Like</button>`;

        commentList.insertAdjacentElement('afterbegin',newComment);
        commentContent.value='';
        console.log('commented');
        }
        else{
            alert('please enter something');
        }

    }

    if(event.target.classList.contains('like')){
        event.target.classList.toggle('liked')
        const likeStatus=event.target;
        if(likeStatus.innerHTML==='Like')
            likeStatus.innerHTML='Liked';
        else
            likeStatus.innerHTML='Like';
            
    }

    
}

function updateProfile(event){
    const file=event.target.files[0];

    if(file){
        profilePic.src=URL.createObjectURL(file);
    }
}