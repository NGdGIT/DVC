//https://completejavascript.com/hai-cach-lay-vi-tri-nguoi-dung/
//https://timoday.edu.vn/bai-43-dinh-vi-vi-tri-geolocation-trong-html5/
function errorInfo(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            return "Không được cấp quyền truy cập vị trí.";
        case error.POSITION_UNAVAILABLE:
            return "Không lấy được vị trí.";
        case error.TIMEOUT:
            return "Không lấy được vị trí do kết nối quá lâu.";
        case error.UNKNOWN_ERROR:
            return "Không lấy được vị trí do lỗi không xác định.";
    }
}

function positionInfo(position){
    document.getElementById('mat_toaDo').value = position.coords.latitude + ", " 
                                               + position.coords.longitude + ", "
                                               + position.coords.accuracy;
    var huong = ["Bắc ", "Bắc Đông Bắc ", "Đông Bắc ", "Đông Đông Bắc ",
                "Đông ", "Đông Đông Nam ", "Đông Nam ", "Nam Đông Nam ",
                "Nam ", "Nam Tây Nam ", "Tây Nam ", "Tây Tây Nam ", 
                "Tây ", "Tây Tây Bắc ", "Tây Bắc ", "Bắc Tây Bắc "];
    document.getElementById('mat_huong').value = huong[Math.round(position.coords.heading / 22.5) % 16] + position.coords.heading + " độ";
    
    //switch(position.coords.heading){
    //    case 0:   return "Bắc";
    //    case 90:  return "Đông";
    //    case 180: return "Nam";
    //    case 270: return "Tây";
    //    case 45:  return "Đông Bắc";
    //    case 135: return "Đông Nam";
    //    case 225: return "Tây Nam";
    //    case 305: return "Tây Bắc";
    //}
    

}

function locate(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            //(position)=> {document.getElementById('mat_toaDo').value = position.coords.latitude + ", " + position.coords.longitude; },
            positionInfo(position),
            (error) => {alert(errorInfo(error));},
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0, }
        );
    }
    else{
        alert('Trình duyệt không hỗ trợ lấy tọa độ');
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