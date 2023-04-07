function sendFormYCTD() {
    // Kiểm tra dữ liệu đã nhập
    if(document.querySelector('#cb_ten').value == '')
    {
        alert("Không được để trống Họ tên cán bộ nhập");
        return;
    }
    if(document.querySelector('#cb_donVi').value == '')
    {
        alert("Không được để trống Đơn vị công tác");
        return;
    }
    if(document.querySelector('#noiDung').value == '')
    {
        alert("Không được để trống " + document.querySelector('#lblnoidung').innerText);
        return;
    }
    // đem tất cả dữ liệu trong form id là 'frm' gom thành biến data
    let data = $('#frmYCTD').serialize();
    console.log(data);
    $.ajax({ //Sử dụng Ajax gửi dữ liệu đi
        url: 'https://script.google.com/macros/s/AKfycbxL7OPwN0ytBZuA_EFr2CwF8ac9EKB0awFskXf4dufATHAzEL6G9WiX6br3w_gxgmiKyg/exec',
        method: "GET",
        dataType: 'json',
        data: data,
        success: function(responseData, textStatus, jqXHR) {
            alert('Đã gửi thông tin thành công');
            //window.jQuery(this).trigger('reset');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Không gửi được thông tin. Hãy thử đăng nhập tài khoản google trước');
            console.log(errorThrown);
        }
    });

    
    document.querySelector("#submit_form").innerText = "Đang gửi đi...";
    setTimeout(() => {
        document.querySelector("#submit_form").innerText = "Gửi thông tin";
    }, 2000);//alert('Đang gửi thông tin');

    return true;
};


function clearFormYCTD(){
    document.getElementById('noiDung').value='';
    document.getElementById('ghiChu').value='';
}