
window.onload = function () {
    // 监听器
    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover', dragOver, false);
    dropZone.addEventListener('drop', fileSelect, false);
};


// 必须阻止dragenter和dragover事件的默认行为，这样才能触发 drop 事件
function fileSelect(evt) {

    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // 文件对象
    var output = [];

    // 处理多文件
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
            f.size, ' bytes, last modified: ',
            f.lastModifiedDate.toLocaleDateString(), '</li>');
    }
    // 显示文件信息
    document.getElementById('list').innerHTML = output.join('');
}

function dragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
}


