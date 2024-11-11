// Add event listeners to each box
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const boxId = box.id;
        const boxContent = document.getElementById(`${boxId}-content`);
        const radioButton = box.querySelector('input[type="radio"]');

        // Hide all box contents and deactivate all radios
        document.querySelectorAll('.box-content').forEach(content => {
            content.style.display = 'none';
        });
        document.querySelectorAll('.box').forEach(removeBox => {
            removeBox.classList.remove('active');
            const input = removeBox.querySelector('input[type="radio"]');
            input.checked = false;
        });

        // Toggle Button check
        if (boxContent.style.display !== 'block') {
            boxContent.style.display = 'block';
            box.classList.add('active');
            radioButton.checked = true;
        }
    });
});