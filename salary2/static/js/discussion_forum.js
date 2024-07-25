// document.addEventListener("DOMContentLoaded", function() {
//     const modal = document.getElementById("postModal");
    
//     window.openModal = function(section) {
//         const title = section.getAttribute("data-title");
//         const content = section.getAttribute("data-content");
//         const posts = section.getAttribute("data-posts");

//         document.getElementById("modal-title").innerText = title;
//         document.getElementById("modal-content").innerText = content;
//         const commentsSection = document.getElementById("comments-list");
        
//         // Add some mock comments for demonstration
//         commentsSection.innerHTML = `
//             <p><strong>Comment 1:</strong> This is a great topic!</p>
//             <p><strong>Comment 2:</strong> I have some insights to share.</p>
//         `;
        
//         modal.style.display = "block";
//     };

//     window.closeModal = function() {
//         modal.style.display = "none";
//     };
    
//     window.submitComment = function() {
//         const commentText = document.getElementById("comment").value;
//         if (commentText) {
//             const newComment = document.createElement("p");
//             newComment.innerHTML = `<strong>You:</strong> ${commentText}`;
//             document.getElementById("comments-list").appendChild(newComment);
//             document.getElementById("comment").value = "";
//         }
//     };
    
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     };
// });
