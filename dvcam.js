function locate(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=> {
            document.getElementById('mat_toaDo').value = position.coords.latitude + ", " + position.coords.longitude;
        });
    }
}


function sendForm() {
    // đem tất cả dữ liệu trong form id là 'frm' gom thành biến data
    let data = $('#frm').serialize();
    $.ajax({ //Sử dụng Ajax gửi dữ liệu đi
        url: 'https://script.google.com/macros/s/AKfycbx9Rg7L0ThJn3rr5H30qZPyTwZlgVEvQ8-D5qblPdKk8LepLd_EyoVKVPewZEluIVI/exec',
        method: 'GET',
        dataType: 'json',
        data: data,
        success: function(responseData, textStatus, jqXHR) {
            alert('Đã gửi thông tin thành công');
            window.jQuery(this).trigger('reset');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Không gửi được thông tin. Hãy thử đăng nhập tài khoản google trước');
            console.log(errorThrown);
        }
    });

    
    alert('Success!');

    return true;
};

function In_Content(content_id){   
    var prtContent = document.getElementById(content_id);
    var WinPrint = window.open('','','letf=0,top=0,width=800,height=800');
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
}

function LoaiHinhSelected(str){
    document.getElementById('lbl_chu_ten').innerText = "Họ tên " + str;
    document.getElementById('lbl_chu_diaChi').innerText = "Địa chỉ " + str;
    document.getElementById('lblchu_sdt').innerText = "Số điện thoại " + str;
    document.getElementById('lblCheck').innerText = str + " là người quản lý";
}

function ChuHoQuanLy()
{
    if(document.getElementById('checkChuQuanLy').checked)
    {
        document.getElementById('quanLy_ten').value = document.getElementById('chu_ten').value;
        document.getElementById('quanLy_diaChi').value = document.getElementById('chu_diaChi').value;
        document.getElementById('quanLy_sdt').value = document.getElementById('chu_sdt').value;
    }
}