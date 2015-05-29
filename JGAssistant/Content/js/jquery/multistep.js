 $(document).ready(function () {
        $('#slider').rhinoslider({
            controlsPlayPause: false,
            controlsKeyboard: false,
            showControls: 'always',
            showBullets: 'always',
            controlsMousewheel: false,
            prevText: 'Anterior',
            nextText: 'Siguiente',
            slidePrevDirection: 'toRight',
            slideNextDirection: 'toLeft'
        });


        $(".rhino-prev").hide();
        $('.rhino-next').after('<a class="form-submit" href="javascript:void(0);" >Siguiente</a>');
        $(".rhino-next").hide();




        var info = ["Detalles de naviera", "Detallles del contenedor", "Detalles de posicionamiento", "Detalles de partes"];
        $('.rhino-bullet').each(function (NewBooking) {
            $(this).html('<p style="margin: 0pt; font-size: 13px; font-weight: bold;"></p><p class="bullet-desc">' + info[NewBooking] + '</p></a>');
        });

        $('.form-submit').live("click", function () {

            $('.form-error').html("");

            var current_tab = $('#slider').find('.rhino-active').attr("id");

            switch (current_tab) {
                case 'rhino-item0':
                    step1_validation();
                    break;
                case 'rhino-item1':
                    step2_validation();
                    break;
                case 'rhino-item2':
                    step3_validation();
                    break;
                case 'rhino-item3':
                    step4_validation();
                    break;
            }
        });

        var step1_validation = function () {

            var err = 0;

            if ($('#fname').val() == '') {
                $('#fname').parent().parent().find('.form-error').html("First Name is Required");
                err++;
            }
            if ($('#lname').val() == '') {
                $('#lname').parent().parent().find('.form-error').html("Last Name is Required");
                err++;
            }
            if ($('#gender').val() == '0') {
                $('#gender').parent().parent().find('.form-error').html("Please Select Gender");
                err++;
            }
            if (err == 0) {
                $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                $(".rhino-next").show();
                $('.form-submit').hide();
                $('.rhino-next').trigger('click');
            } else {
                $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
            }


        };

        var step2_validation = function () {
            var err = 0;

            if ($('#username').val() == '') {
                $('#username').parent().parent().find('.form-error').html("Username is Required");
                err++;
            }
            if ($('#pass').val() == '') {
                $('#pass').parent().parent().find('.form-error').html("Password is Required");
                err++;
            }
            if ($('#cpass').val() == '') {
                $('#cpass').parent().parent().find('.form-error').html("confirm Password is Required");
                err++;
            }

            if (err == 0) {
                $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                $(".rhino-next").show();
                $('.form-submit').hide();
                $('.rhino-next').trigger('click');
            } else {
                $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
            }

        };

        var step3_validation = function () {
            var err = 0;

            if ($('#email').val() == '') {
                $('#email').parent().parent().find('.form-error').html("Email is Required");
                err++;
            }
            if (err == 0) {
                $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                $(".rhino-next").show();
                $('.form-submit').hide();
                $('.rhino-next').trigger('click');
            } else {
                $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
            }

        };

        var step4_validation = function () {
            var err = 0;

            if ($('#email').val() == '') {
                $('#email').parent().parent().find('.form-error').html("Email is Required");
                err++;
            }
            if (err == 0) {
                $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                $(".rhino-next").show();
                $('.form-submit').hide();
                $('.rhino-next').trigger('click');
            } else {
                $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
            }

        };



    });

