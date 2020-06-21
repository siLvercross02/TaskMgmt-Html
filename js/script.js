$(document).ready(function() {
    $('#myTable').DataTable();
} );

function toggleSlide() {

    document.getElementById('sidebar-menu').style.width = '100px';
    document.getElementById('main').style.marginLeft = '7rem';
    
    document.getElementById('link').style.textAlign = 'center';
    document.getElementById('dash').classList.add("d-none");

    document.getElementById('link1').style.textAlign = 'center';
    document.getElementById('users').classList.add("d-none");

    document.getElementById('link2').style.textAlign = 'center';
    document.getElementById('msg').classList.add("d-none");

    document.getElementById('link3').style.textAlign = 'center';
    document.getElementById('act').classList.add("d-none");

    document.getElementById('link4').style.textAlign = 'center';
    document.getElementById('report').classList.add("d-none");

    document.getElementById('link5').style.textAlign = 'center';
    document.getElementById('file').classList.add("d-none");

    document.getElementById('link6').style.textAlign = 'center';
    document.getElementById('calendar').classList.add("d-none");

    document.getElementById('link7').style.textAlign = 'center';
    document.getElementById('customer').classList.add("d-none");

    document.getElementById('toggleLeft').classList.add("d-none");
    document.getElementById('toggleRight').classList.add('d-inline-block');
}

function toggle() {

    document.getElementById('sidebar-menu').style.width = '225px';
    document.getElementById('main').style.marginLeft = '15rem';

    document.getElementById('link').style.textAlign = '';
    document.getElementById('dash').classList.remove("d-none");

    document.getElementById('link1').style.textAlign = '';
    document.getElementById('users').classList.remove("d-none");

    document.getElementById('link2').style.textAlign = '';
    document.getElementById('msg').classList.remove("d-none");

    document.getElementById('link3').style.textAlign = '';
    document.getElementById('act').classList.remove("d-none");

    document.getElementById('link4').style.textAlign = '';
    document.getElementById('report').classList.remove("d-none");

    document.getElementById('link5').style.textAlign = '';
    document.getElementById('file').classList.remove("d-none");

    document.getElementById('link6').style.textAlign = '';
    document.getElementById('calendar').classList.remove("d-none");

    document.getElementById('link7').style.textAlign = '';
    document.getElementById('customer').classList.remove("d-none");

    document.getElementById('toggleLeft').classList.remove("d-none");
    document.getElementById('toggleRight').classList.remove("d-inline-block");
}