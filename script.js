<script>
        $(document).ready(function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'django.m4a');
            audioElement.setAttribute('autoplay', 'autoplay');
            //audioElement.load()

            $.get();

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.play').click(function() {
                audioElement.play();
            });

            $('.pause').click(function() {
                audioElement.pause();
            });
        });
    </script>