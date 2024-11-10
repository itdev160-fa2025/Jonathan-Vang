// Utility function
function getById(id) {
    return document.getElementById(id);
  }
  
  // Modal functions
  function openModal() {
    getById('modal').classList.remove('hidden');
    getById('modal-backdrop').classList.remove('hidden');
  }
  
  function closeModal() {
    getById('modal').classList.add('hidden');
    getById('modal-backdrop').classList.add('hidden');
    getById('post-title').value = '';
    getById('post-content').value = '';
  }
  
  function saveContent() {
    const title = getById('post-title').value.trim();
    const content = getById('post-content').value.trim();
  
    if (title && content) {
      const post = document.createElement('div');
      post.className = 'post';
      post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
      getById('display-content').prepend(post);
      closeModal();
    } else {
      alert('Please enter both title and content for your post.');
    }
  }
  
  getById('new-button').addEventListener('click', openModal);
  getById('cancel-button').addEventListener('click', closeModal);
  getById('save-button').addEventListener('click', saveContent);
  