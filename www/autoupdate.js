/**
 * Created by stoneship on 15/12/13.
 * email:258137678@qq.com
 */
(function () {

    var Updata = function () {
        // Check for Cordova
        var SERVER = 'http://192.168.199.64:8089/cordova-seed/www/';

        var fs = new CordovaPromiseFS({persistent: typeof cordova !== 'undefined'});

        var loader = window.loader = new CordovaAppLoader({
            fs: fs,
            localRoot: 'app',
            serverRoot: SERVER,
            mode: 'mirror',
            cacheBuster: true
        });



        function loadIndexHtml() {
            window.pegasus(Manifest.root + '_index.html').then(function (template) {
                $('body').html(template);
                require(['components/page/app']);
            }, function (xhr) {
                console.error('Could not download ' + url + ': ' + xhr.status);
            })
        }

        return {
            updateAvailable: false,
            init: function () {
                loadIndexHtml()
            },
            check: function (success, error) {
                var me = this;
                loader.check().then(function (updateAvailable) {
                    me.updateAvailable = updateAvailable;
                    success();
                }, error);
            },
            download: function (onProgress,success, error) {
                loader.download(onProgress).then(success, error);
            },
            update: function () {
                loader.update();
            }
        }

    }

    var updataMg = window.UpdateMg = new Updata();
    updataMg.init();
    // 2. Cordova: On resume
    document.addEventListener('resume', function () {
        UpdateMg.check()
    });

    window.BOOTSTRAP_OK = true;

})();