document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('commentForm');
    if (!form) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name').value.trim();
        if (name.length < 3) {
            alert('Name must have at least 3 characters.');
            return;
        }
        var phone = document.getElementById('phone').value.trim();
        if (phone.length < 10) {
            alert('Phone number must have at least 10 characters.');
            return;
        }
        var email = document.getElementById('email').value.trim();
        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            return;
        }
        var comment = document.getElementById('comment').value.trim();
        if (!comment) {
            alert('Please enter a comment.');
            return;
        }

        var commentsContainer = document.getElementById('comments');
        var entry = document.createElement('div');
        entry.className = 'comment-entry';
        entry.innerHTML =
        '<table>'
            '<strong>' + escapeHtml(name) + '</strong>' +
            '<p>' + escapeHtml(comment).replace(/\n/g, '<br>') + '</p>';
        '</table>';
        commentsContainer.appendChild(entry);
        form.reset();
    });

    function escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

});