// $(function () {
//     $('.nav a').click(function () {
//         $(this).addClass('active').siblings('a').removeClass('active')
//     })

// })


// console.log($)
(function () {
    // style()
    header()
    
})();

function style(){
    var uaTest = /Android|webOS|Windows Phone|iPhone|ucweb|ucbrowser|iPod|iPad|BlackBerry/i.test(navigator.userAgent
        .toLowerCase());
    var touchTest = 'ontouchend' in document;
    if (uaTest && touchTest) {
        console.log(1,uaTest,touchTest)
        window.location.href = '/phoneIndex.html';
        return
    }else if(!uaTest && !touchTest){
        console.log(2,uaTest,touchTest)
        window.location.href = './index.html';
        return
    }
}
function header() {
    pos = 0;
    ticking = false;
    var header = document.getElementById("header1");
    window.addEventListener("scroll", function (e) {
        pos = window.scrollY;
        if (pos > 100 && !ticking) {
            header.className = 'myClass';
            ticking = true;
        }
        if (pos < 100 && ticking) {
            header.className = 'myClass1';
            ticking = false;
        }
    });
}

$('#monye').on('click', function () {
    layer.open({
        type: 2,
        title: '游娱充值中心',
        maxmin: false,
        shadeClose: false,
        area: ['800px', '540px'],
        content: 'Recharge.html'
    });
});

// $('.ui-choose').ui_choose();
var uc_01 = $('#uc_01').data('ui-choose');
// uc_01.click = function (index, item) {
//     console.log('click', index, item.text())
// }
// uc_01.change = function (index, item) {
//     console.log('change', index, item.text())
// }
// 金额选择
$(function () {
    $('#uc_01 li:eq(3)').click(function () {
        $('.tr_rechoth').show();
        $('.tr_rechoth').find("input").attr('required', 'true')
        $('.rechnum').text('10.00元');
    })
    $('#uc_01 li:eq(0)').click(function () {
        $('.tr_rechoth').hide();
        $('.rechnum').text('10.00元');
        $('#uc_01 li:eq(0) input[type="radio"]').val("10.00")
        $('.othbox').val('');
    })
    $('#uc_01 li:eq(1)').click(function () {
        $('.tr_rechoth').hide();
        $('.rechnum').text('20.00元');
        $('#uc_01 li:eq(1) input[type="radio"]').val("20.00")
        $('.othbox').val('');
    })
    $('#uc_01 li:eq(2)').click(function () {
        $('.tr_rechoth').hide();
        $('.rechnum').text('50.00元');
        $('#uc_01 li:eq(2) input[type="radio"]').val("50.00")
        $('.othbox').val('');
    })
    $(document).ready(function () {
        $('.othbox').on('input propertychange', function () {
            var num = $(this).val();
            if(num ==""){
                num = 0
            }
            $('.rechnum').html(num + ".00元");
            $('#uc_01 li:eq(3) input[type="radio"]').val(num)
        });
    });
})
// 是否同意协议
$("#one").click(function () {
    if($('#one:checkbox:checked').val() == "on"){
        $('.tr_paybox input[type="button"]').attr("disabled",false)
    }else{
        $('.tr_paybox input[type="button"]').attr("disabled",true)
    }
})
// 提交表单支付
$('.tr_paybox input[type="button"]').click(function(){
    $('form').submit();
    // layer.load();
   
})

$(function () {
    // 提示信息
    $('#doc-vld-msg').validator({
        onValid: function (validity) {
            $(validity.field).closest('.am-form-group').find('.am-alert').hide();
        },
        onInValid: function (validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-group');
            var $alert = $group.find('.am-alert');
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);
            if (!$alert.length) {
                $alert = $('<div class="am-alert am-alert-danger"></div>').hide().
                    appendTo($group);
            }
            $alert.html(msg).show();
        }
    });
});