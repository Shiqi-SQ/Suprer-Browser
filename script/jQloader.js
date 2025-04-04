(function () {
    if (typeof window.jQuery === 'undefined') {
        console.log('jQuery 未检测到，正在加载 jQuery 3.7.1...');
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
        script.integrity = 'sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=';
        script.crossOrigin = 'anonymous';
        script.onload = function () {
            console.log('jQuery 3.7.1 加载成功！');
            var event = new CustomEvent('jQueryLoaded');
            document.dispatchEvent(event);
        };
        script.onerror = function () {
            console.error('jQuery 加载失败，尝试使用备用源...');
            var backupScript = document.createElement('script');
            backupScript.type = 'text/javascript';
            backupScript.src = 'https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js';
            backupScript.onload = function () {
                console.log('jQuery 3.7.1 从备用源加载成功！');
                var event = new CustomEvent('jQueryLoaded');
                document.dispatchEvent(event);
            };
            backupScript.onerror = function () {
                console.error('jQuery 从备用源加载也失败了！');
            };
            document.head.appendChild(backupScript);
        };
        document.head.appendChild(script);
    } else {
        console.log('jQuery 已存在，版本: ' + jQuery.fn.jquery);
    }
    window.isJQueryLoaded = function () {
        return typeof window.jQuery !== 'undefined';
    };
})();