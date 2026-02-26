// Bài: Quản lý post với xoá mềm và ID tự tăng

// Danh sách post ban đầu (giả sử mã nguồn cũ chỉ có 3 post như thế này)
let posts = [
  { id: 1, title: "Post 1", content: "Nội dung post 1", isDeleted: false },
  { id: 2, title: "Post 2", content: "Nội dung post 2", isDeleted: false },
  { id: 3, title: "Post 3", content: "Nội dung post 3", isDeleted: false }
];

// -------- 1. Chuyển xoá cứng -> xoá mềm --------
// Thay vì .splice() để xoá hẳn khỏi mảng, ta chỉ set isDeleted = true
function softDeletePost(id) {
  const post = posts.find(p => p.id === id);
  if (!post) {
    console.log("Không tìm thấy post với id =", id);
    return;
  }
  post.isDeleted = true;
}

// -------- 2. Hiển thị post, post xoá mềm có gạch ngang --------
function renderPosts() {
  console.log("=== DANH SÁCH POST ===");

  posts.forEach(p => {
    const base = `#${p.id} - ${p.title}: ${p.content}`;

    if (p.isDeleted) {
      // Gạch ngang bằng Markdown-style cho dễ nhìn khi in console
      console.log(`~~${base}~~ (ĐÃ XOÁ MỀM)`);
    } else {
      console.log(base);
    }
  });
}

// -------- 3. Tạo post mới với ID tự tăng (maxId + 1) --------
// Khi tạo mới thì ID input để trống, hàm sẽ tự tính ID
function createPost(title, content) {
  const maxId = posts.reduce((max, p) => (p.id > max ? p.id : max), 0);
  const newId = maxId + 1;

  const newPost = {
    id: newId,
    title,
    content,
    isDeleted: false
  };

  posts.push(newPost);
  return newPost;
}

// -------- Demo chạy thử --------
console.log("Ban đầu:");
renderPosts();

console.log("\nXoá mềm post có id = 2:");
softDeletePost(2);
renderPosts();

console.log("\nTạo post mới (ID tự tăng):");
createPost("Post mới", "Nội dung post mới");
renderPosts();

