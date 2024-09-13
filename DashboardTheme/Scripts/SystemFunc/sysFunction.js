$(function () {
    //Make the dashboard widgets sortable Using jquery UI
    //$(".connectedSortable").sortable({
    //    placeholder: "sort-highlight",
    //    connectWith: ".connectedSortable",
    //    handle: ".box-header, .nav-tabs",
    //    forcePlaceholderSize: true,
    //    zIndex: 999999
    //});
    //$(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");


    //SetInputMask();
    //SetTootip();
    //SetICheck();
    //SetColDatatable();
    try {
        $('.dropdownSearch').selectpicker({
            'size': '6'

        });
    } catch (ex) {
    }
});
// var  SysProcess = {
//    FileOversize: "OverSize",
//    FileInvalidType: "InvalidType",
//    Failed: "Failed",
//    Success: "Success",
//    SessionExpired: "SSEXP",
//    Duplicate: "DUP"
//}

const SysProcess =  {
    FileOversize: "OverSize",
    FileInvalidType: "InvalidType",
    Failed: "Failed",
    Success: "Success",
    SessionExpired: "SSEXP",
    Duplicate: "DUP",
    process_notPermission: "NPM"

}

const drmsStatus = {
    Draft: "1",
    Waiting_approval: "2",
    Approved: "3",
    Revise: "4",
    Rollback: "6",
}
var url = document.URL;
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);

    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function viewmode() {

    var obj = $('body').find('#divContent').find('input');
    $.each(obj, function (key, data) {
        $('#' + data.id).prop('disabled', true);
    });
    var obj = $('body').find('#divContent').find('textarea');
    $.each(obj, function (key, data) {
        $('#' + data.id).prop('disabled', true);
    });
    var obj = $('body').find('#divContent').find('button');
    $.each(obj, function (key, data) {
        if (data.id != "btnBack") {
            $('#' + data.id).prop('disabled', true);
        }

    });
    var obj = $('body').find('#divContent').find('select');
    $.each(obj, function (key, data) {
        $('#' + data.id).prop('disabled', true);
    });

}



const PopupLogin = function PopupLogin(homeUrl) {
    if (homeUrl != undefined) {
        DialogAlertLogin(DialogHeader.Info, DialogMsg.Login, homeUrl);
    }
    else {
        DialogAlertLogin(DialogHeader.Info, DialogMsg.Login);
    }
}

function PopUpNoPermission() {
    DialogAlertLogin(DialogHeader.Warning, "You don't have permission.", "index.aspx");
}

function PopUpNoPermissionUnit() {
    DialogAlertLogin(DialogHeader.Warning, "You don't have permission.", "index.aspx");
}
function PopUpNoPermissionRedirect(URL) {
    DialogAlertLogin(DialogHeader.Warning, "You don't have permission.", URL);
}



var EmptyTable = 'Data Not Found.';



function SetICheck() {
    //$('input').iCheck('destroy');
    //iCheck for checkbox and radio inputs
    $('.minimal input[type="checkbox"],.minimal input[type="radio"]').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue'
    });
    $('.minimal-red input[type="checkbox"],.minimal-red input[type="radio"]').iCheck({
        checkboxClass: 'icheckbox_minimal-red',
        radioClass: 'iradio_minimal-red'
    });
    $('.flat-red input[type="checkbox"],.flat-red input[type="radio"]').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red'
    });
    $('.minimal-green input[type="checkbox"],.minimal-green input[type="radio"]').iCheck({
        checkboxClass: 'icheckbox_minimal-green',
        radioClass: 'iradio_minimal-green'
    });
    $('.flat-green input[type="checkbox"],.flat-green input[type="radio"]').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });

    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal,input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue'
    });
    $('input[type="checkbox"].minimal-red,input[type="radio"].minimal-red').iCheck({
        checkboxClass: 'icheckbox_minimal-red',
        radioClass: 'iradio_minimal-red'
    });
    $('input[type="checkbox"].flat-red,input[type="radio"].flat-red').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red'
    });
    $('input[type="checkbox"].minimal-green,input[type="radio"].minimal-green').iCheck({
        checkboxClass: 'icheckbox_minimal-green',
        radioClass: 'iradio_minimal-green'
    });
    $('input[type="checkbox"].flat-green,input[type="radio"].flat-green').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });
}
function SetICheckCheckBox() {
    //$('input').iCheck('destroy');
    //iCheck for checkbox and radio inputs
    $('.minimal input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue'
    });
    $('.minimal-red input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_minimal-red',
        radioClass: 'iradio_minimal-red'
    });
    $('.flat-red input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red'
    });
    $('.minimal-green input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_minimal-green',
        radioClass: 'iradio_minimal-green'
    });
    $('.flat-green input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });

    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue'
    });
    $('input[type="checkbox"].minimal-red').iCheck({
        checkboxClass: 'icheckbox_minimal-red',
        radioClass: 'iradio_minimal-red'
    });
    $('input[type="checkbox"].flat-red').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red'
    });
    $('input[type="checkbox"].minimal-green').iCheck({
        checkboxClass: 'icheckbox_minimal-green',
        radioClass: 'iradio_minimal-green'
    });
    $('input[type="checkbox"].flat-green').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });
}




function reEscape(s) {
    if (s != undefined && s != "") {
        return s.replace(/<(?:.|\n)*?>/gm, '');
    }
    else {
        return "";
    }

}
/*********** Dialog  ***********/
var DialogHeader = {
    Info: "Process Result",
    Error: "An error occur, please contact administrator",
    Confirm: "Process Confirmation",
    Warning: "Process Result"
}

var DialogMsg = {
    ConfirmDel: "Do you want to delete?",
    ConfirmApprove: "Do you want to approve?",
    ConfirmRevise: "Do you want to rework?",
    ConfirmSave: "Do you want to submit?",
    AlertDel: "Please select item you want to delete.",
    SaveComplete: "Saving Completed",
    DelComplete: "Delete Completed",
    ApproveComplete: "Approve Completed",
    Login: "Please login to use the system.",
    Duplicate: "Cannot save duplicate data.",
    SaveFail: "Cannot save data.",
}

var btnOKText = "OK";
var btnCancelText = "Cancel";

function DialogInfo(head, msg) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_INFO,
        buttons: [{
            id: 'btn-ok',
            icon: 'glyphicon glyphicon-check',
            label: btnOKText,
            cssClass: 'btn btn-info',
            autospin: false,
            action: function (dialogRef) {
                dialogRef.close();
            }
        }]
    });
}

function DialogInfoRedirect(head, msg, redirto) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_INFO,
        buttons: [{
            id: 'btn-ok',
            icon: 'glyphicon glyphicon-check',
            label: btnOKText,
            cssClass: 'btn btn-info',
            autospin: false,
            action: function (dialogRef) {
                window.location = redirto;
            }
        }]
    });
}

function DialogError(head, msg) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_DANGER,
        buttons: [{
            id: 'btn-ok',
            label: btnOKText,
            cssClass: 'btn btn-danger',
            autospin: false,
            action: function (dialogRef) {
                dialogRef.close();
            }
        }]
    });
}
function DialogErrorCallback(head, msg, funcCallback) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_DANGER,
        buttons: [{
            id: 'btn-ok',
            label: btnOKText,
            cssClass: 'btn btn-danger',
            autospin: false,
            action: function (dialogRef) {
                dialogRef.close();
                funcCallback();
            }
        }]
    });
}

function DialogErrorRedirect(head, msg, redirto) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_DANGER,
        buttons: [{
            id: 'btn-ok',
            label: btnOKText,
            cssClass: 'btn btn-danger',
            autospin: false,
            action: function (dialogRef) {
                window.location = redirto;
            }
        }]
    });
}

function DialogWarning(head, msg) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_WARNING,
        buttons: [{
            id: 'btn-ok',
            label: btnOKText,
            cssClass: 'btn btn-warning',
            autospin: false,
            action: function (dialogRef) {
                dialogRef.close();
            }
        }]
    });
}

function DialogWarningRedirect(head, msg, redirto) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_WARNING,
        buttons: [{
            id: 'btn-ok',
            label: btnOKText,
            cssClass: 'btn btn-warning',
            autospin: false,
            action: function (dialogRef) {
                window.location = redirto;
            }
        }]
    });
}

function DialogConfirm(head, msg, funcYes, funcNo) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_PRIMARY,
        closable: true,
        draggable: true,
        buttons: [{
            id: 'btn-ok',
            //icon: 'glyphicon glyphicon-check',
            label: btnOKText,
            cssClass: 'btn btn-primary',
            autospin: false,
            action: function (dialogRef) {
                dialogRef.close();
                //LoaddinProcess();
                funcYes();
            }
        },
        {
            id: 'btn-cancel',
            //icon: 'glyphicon glyphicon-remove',
            label: btnCancelText,
            cssClass: 'btn btn-default',
            autospin: false,
            action: function (dialogRef) {
                dialogRef.close();
                if (funcNo != null && funcNo != undefined && funcNo != "") {
                    funcNo();
                }
            }
        }
        ]
    });
}
function DialogWarningConfirm(head, msg, funcYes, funcNo) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_WARNING,
        closable: true,
        draggable: true,
        buttons: [{
            id: 'btn-ok',
            //icon: 'glyphicon glyphicon-check',
            label: btnOKText,
            cssClass: 'btn btn-warning',
            autospin: false,
            action: function (dialogRef) {
                dialogRef.close();
                //LoaddinProcess();
                funcYes(dialogRef);
            }
        },
        {
            id: 'btn-cancel',
            //icon: 'glyphicon glyphicon-remove',
            label: btnCancelText,
            cssClass: 'btn btn-default',
            autospin: false,
            action: function (dialogRef) {
                dialogRef.close();
                if (funcNo != null && funcNo != undefined && funcNo != "") {
                    funcNo(dialogRef);
                }
            }
        }
        ]
    });
}
function DialogSuccess(head, msg) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_SUCCESS,
        buttons: [{
            id: 'btn-ok',
            icon: 'glyphicon glyphicon-check',
            label: btnOKText,
            cssClass: 'btn btn-success',
            autospin: false,
            action: function (dialogRef) {
                dialogRef.close();
            }
        }]
    });
}


const NotifySuccess = function NotifySuccess(msg) {
    $.notify({
        // options
        message: msg
    }, {
        // settings
        type: 'success',
        delay: 4000,
        offset: {
            y: 100,
            x: 20
        }
    });
}
const NotifyUpdate = function NotifySuccess(msg) {
    $.notify({
        // options
        message: msg
    }, {
        // settings
        type: 'success',
        delay: 4000,
        offset: {
            y: 100,
            x: 20
        }
    });
}
function FireToast(message) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        allowOutsideClick: false, // Prevent closing when clicking outside
        allowEscapeKey: false,
        popup: 'no-curve-swal',
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            Swal.showLoading()
        }
    });
    Toast.fire({
        icon: "success",
        html: '<h3 id="progress" class="swal-title">' + message + '</h3> ',
    });
}
function FireAlertToast(message) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "warning",
        title: message
    });
}
function DialogSuccessCallback(head, msg, funcCallback) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_SUCCESS,
        closable: false,
        draggable: true,
        buttons: [{
            id: 'btn-ok',
            icon: 'glyphicon glyphicon-check',
            label: btnOKText,
            cssClass: 'btn btn-success',
            autospin: false,
            action: function (dialogRef) {
                dialogRef.close();
                funcCallback();
            }
        }]
    });
}
function DialogSuccessRedirect(head, msg, redirto) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_SUCCESS,
        buttons: [{
            id: 'btn-ok',
            icon: 'glyphicon glyphicon-check',
            label: btnOKText,
            cssClass: 'btn btn-success',
            autospin: false,
            action: function (dialogRef) {
                window.location = redirto;
            }
        }]
    });
}

function DialogAlertLogin(head, msg, redirto) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_WARNING,
        closable: false,
        closeByBackdrop: false,
        closeByKeyboard: false,
        buttons: [{
            id: 'btn-ok',
            icon: 'glyphicon glyphicon-check',
            label: btnOKText,
            cssClass: 'btn btn-warning',
            autospin: false,
            action: function (dialogRef) {
                if (redirto != undefined) {
                    window.location = redirto;
                }
                else {
                    location.reload()
                }
            }
        }]
    });
}

function DialogSuccessOk(head, msg, redirto, func) {
    BootstrapDialog.show({
        title: head,
        message: msg,
        type: BootstrapDialog.TYPE_SUCCESS,
        closable: false,
        closeByBackdrop: false,
        closeByKeyboard: false,
        buttons: [{
            id: 'btn-ok',
            icon: 'glyphicon glyphicon-check',
            label: btnOKText,
            cssClass: 'btn btn-success',
            autospin: false,
            action: function (dialogRef) {
                if (redirto == undefined || redirto == "") {
                    dialogRef.close();
                }
                else if (redirto == "true") {
                    window.location.reload();
                }
                else if (redirto == "func") {
                    if (func != undefined && func != "") {
                        func();
                    }
                }
                else {
                    window.location = redirto;
                }
                dialogRef.close();
            }
        }]
    });
}
/***********End Dialog  ***********/


function GetLabelByID(sID) {
    return $("label[id$='" + sID + "']");
}
function GetTextareaByID(sID) {
    return $("textarea[id$='" + sID + "']");
}
function GetInputByID(sID) {
    return $("input[id$='" + sID + "']");
}
function GetInputByName(sName) {
    return $("input[name$='" + sName + "']");
}
function GetSelectByID(sID) {
    return $("select[id$='" + sID + "']");
}
function GetSelectByName(sName) {
    return $("select[name$='" + sName + "']");
}
function GetButtonByID(sID) {
    return $("button[id$='" + sID + "']");
}
function GetButtonByName(sName) {
    return $("button[name$='" + sName + "']");
}
function GetHyperLinkByID(sID) {
    return $("a[id$='" + sID + "']");
}
function GetCheckboxList(sName) {
    return $("input[name*='$" + sName + "$']");
}
function GetRadio(sName) {
    return $("input[name='" + sName + "']");
}
function GetTableByID(sID) {
    return $("table[id$='" + sID + "']");
}
function GetTHeadByID(sID) {
    return $("table[id$='" + sID + "']>thead");
}
function GetTBodyByID(sID) {
    return $("table[id$='" + sID + "']>tbody");
}
function GetValueTextBox(sID) {
    return GetInputByID(sID).val();
}

function IsEmpty(str) {
    var _empty = (str === undefined || str === null || str === '' || str === 'null');
    return _empty;
}
function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
function SetFormatNumber(nNumber, nDecimal, sEmpty) {
    if ($.isNumeric(nNumber)) {
        if ($.isNumeric(nDecimal))
            return addCommas(nNumber.toFixed(nDecimal));
        else
            return addCommas(nNumber);
    }
    else {
        return IsEmpty(nNumber) ? (sEmpty === undefined ? "" : sEmpty) : nNumber;
    }
}
function SetMaxLength($ctrl, nMaxLength) {
    $ctrl.prop('maxlength', nMaxLength);
}
function SetCheckedList(cbl, lstValue) {
    var $cbl = GetCheckboxList(cbl);
    $.each($cbl, function (index, element) {
        var $cb = $(element);
        var isChecked = Enumerable.From(lstValue).Any(function (w) { return w === $cb.val(); });
        $cb.SetChecked(isChecked);
    });
}
function scrollToAnchor($element) {
    $('html,body').animate({ scrollTop: $element.offset().top - 148 }, 'slow');
}

/*==== แปลง DateTime C# to java และจัดฟอร์แมต ====*/
function ConvertDateTimeToString(_sDate) {

    if (_sDate !== null) {
        var dDate;

        var _Date = '';
        var _Time = '';

        if (_sDate.indexOf('/Date(') > -1) {
            var sDate = _sDate.replace('/Date(', '').replace(')/', '');
            dDate = new Date(parseInt(sDate));

            _Date += (dDate.getDate() < 10 ? '0' : '') + dDate.getDate() + '/';
            _Date += (dDate.getMonth() < 10 ? '0' : '') + dDate.getMonth() + '/';
            _Date += (dDate.getFullYear() < 10 ? '0' : '') + (dDate.getFullYear());


            _Time += (dDate.getHours() < 10 ? '0' : '') + dDate.getHours() + ':';
            _Time += (dDate.getMinutes() < 10 ? '0' : '') + dDate.getMinutes();
        }
        else {
            var sDate = _sDate.split('/');
            dDate = new Date(parseInt(sDate[2]) - 543, parseInt(sDate[1]) - 1, parseInt(sDate[0]));

            _Date += (dDate.getDate() < 10 ? '0' : '') + dDate.getDate() + '/';
            _Date += ((dDate.getMonth() + 1) < 10 ? '0' : '') + (dDate.getMonth() + 1) + '/';
            _Date += (dDate.getFullYear() < 10 ? '0' : '') + (dDate.getFullYear());


            _Time += (dDate.getHours() < 10 ? '0' : '') + dDate.getHours() + ':';
            _Time += (dDate.getMinutes() < 10 ? '0' : '') + dDate.getMinutes();
        }

        return { 'Date': _Date, 'Time': _Time };
    }
    else {
        return { 'Date': '-', 'Time': '-' };
    }
}
/*==== แปลง DateTime java to C#  ====*/
function ConvertStringToDateTime(textDate, textTime) {

    var dDate = null;

    var arrDate = textDate.split("/");
    var arrTime = textTime.split(":");

    if (arrDate.length === 3) {
        if (arrTime.length === 2) dDate = new Date(arrDate[2], arrDate[1], arrDate[0], arrTime[0], arrTime[1], 0, 0);
        else dDate = new Date(arrDate[2], arrDate[1], arrDate[0]);
    }

    return dDate;
}
/*==== แปลง DateTime C# to java และจัดฟอร์แมต ====*/
function ConvertDateTimeCSToDateTime(_sDate) {

    if (_sDate !== null) {

        var _Date = new Date();

        if (_sDate.indexOf('/Date(') > -1) {
            var sDate = _sDate.replace('/Date(', '').replace(')/', '');
            var dDate = new Date(parseInt(sDate));

            _Date = dDate;
        }
        else {
            _Date = _sDate;
        }

        return _Date;
    }
    else {
        return null;
    }
}

function isNumeric(nStr) {
    return $.isNumeric(nStr);
}
function ConvertToIntNullable(nStr) {
    return $.isNumeric(nStr) ? parseInt(nStr) : null;
}
function ConvertToIntNotnull(nStr) {
    return $.isNumeric(nStr) ? parseInt(nStr) : 0;
}
function ConvertToFloatNullable(nStr) {
    return $.isNumeric(nStr) ? parseFloat(nStr) : null;
}
function ConvertToFloatNotnull(nStr) {
    return $.isNumeric(nStr) ? parseFloat(nStr) : 0;
}
function ConvertBlankToNull(str) {
    return IsEmpty(str) ? null : str;
}
/*==== Set Value To Control ====*/
function SetValTextBox(txtID, sValue) {
    return $("input[id$=" + txtID + "]").val(sValue);
}

/*==== Creart Table datatable.net ====*/
function contains(a, obj) {
    var i = a.length;
    while (i--) {
        if ((a[i] + "").toLowerCase() === obj) {
            return true;
        }
    }
    return false;
}
function containsNumber(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
function arrayContainsAnotherArray(needle, haystack) {
    for (var i = 0; i < needle.length; i++) {
        if (haystack.indexOf(needle[i]) === -1)
            return false;
    }
    return true;
}

/*==== Creart control for Table datatable.net ====*/
function CreatTextbox(sID, sMaxlength, sValue, sFixClr) {

    $("input[id$=" + sID + "]").unbind();
    var sSetValue = sValue != undefined && sValue != "" ? "value='" + sValue + "'" : "";
    var sMaxlength = sMaxlength != undefined && sMaxlength != "" ? "maxlength='" + sMaxlength + "'" : "";
    var sHtml = "<input type='text' id='" + sID + "' name='" + sID + "' class='form-control input-sm' " + sMaxlength + " " + sSetValue + " style='width:100%;'  >";


    //Set Event 
    if (sFixClr != undefined && sFixClr == true) {

    }
    else {
        $("input[id$=" + sID + "]").bind("propertychange change keyup paste input", function () {
            //alert($(this).val());
            $("input[id$=" + sID + "]").val($(this).val());
        });
    }


    return sHtml;
};
function CreatDatePicker(sID, sMaxlength, sValue, sFixClr) {

    var sSetValue = sValue != undefined && sValue != "" ? "value='" + sValue + "'" : "";
    var sMaxlength = 10;//sMaxlength != undefined && sMaxlength != "" ? "maxlength='" + sMaxlength + "'" : "";
    var sHtml = "<div class='input-group form-inline' style='float: left;'>";
    sHtml += "<input type='text' id='" + sID + "' placeholder='-- / -- / ----' name='" + sID + "' class='form-control text-center input-sm' " + sMaxlength + " " + sSetValue + " style='width:100%;'  >";
    sHtml += "<span class='input-group-addon'><i class='glyphicon glyphicon-calendar'></i></span></div>";

    return sHtml;
};
function CreatSelect(sID, objJson, sSelectValue, sDisable) {
    $("select[id$=" + sID + "]").unbind();
    var sDis = "";
    if (sDisable != undefined && sDisable == "Y") {
        sDis = "disabled";
    }
    var sHtml = "<select id='" + sID + "' class='form-control input-sm' style='width:100%;' " + sDis + " >";
    if (objJson != undefined) {
        if (sSelectValue != undefined && sSelectValue != null && sSelectValue != "") {
            $.each(JSON.parse(objJson), function (i, item) {
                var optionhtml = "";
                if (item.value + "" == sSelectValue + "") {
                    optionhtml = '<option value="' +
                        item.value + '" selected="selected">' + item.text + '</option>';
                    sHtml += optionhtml;
                }
                else {
                    optionhtml = '<option value="' +
                        item.value + '">' + item.text + '</option>';
                    sHtml += optionhtml;
                }
            });
        }
        else {
            var optionhtml = "";
            $.each(JSON.parse(objJson), function (i, item) {
                optionhtml = '<option value="' +
                    item.value + '">' + item.text + '</option>';
                sHtml += optionhtml;
            });
        }
    }
    sHtml += "</select>";

    //Set Event dropdows
    $("select[id$=" + sID + "]").bind("change", function () {
        $("select[id$=" + sID + "]").val($(this).val());
    });

    return sHtml;
}
function CreatCheckbox(sID, sValue) {
    //var sSetValue = sValue != undefined && sValue != "" ? "value='" + sValue + "'" : "";
    var sSetValue = "";
    if (sValue != undefined && sValue != "") {
        if (sValue == true || sValue == "true") {
            sSetValue = "checked"
        }
    }
    var sHtml = "<input type='checkbox' id='" + sID + "' name='" + sID + "' class='checkbox flat-green no-margin' " + sSetValue + "  >";
    return sHtml;
};
function CreatButtonView(sOnClick) {
    var sHtml = "<button id='btnView' type='button' onclick='View(\"" + sOnClick + "\")'   class='btn btn-xs btn-info'><i class='glyphicon glyphicon-search'></i></button>";
    return sHtml;
};
function CreateLinkInfo(sOnClick) {
    var sHtml = "<a href='#' onclick='View(\"" + sOnClick + "\")'   class='fancybox-table btn btn-xs  btn-info'><i class='glyphicon glyphicon-exclamation-sign'></i></a>";
    return sHtml;
};

/*==== Creart add edit del for Table datatable.net ====*/
function AddItem(objList) {
    // var nCount = $('#' + objList.sTableID + '').dataTable().fnGetData().length;

    var lstJson = objList.objListItem;
    $('#' + objList.sTableID + '').dataTable().fnAddData(
        lstJson
    );
    $('#' + objList.sTableID + '').DataTable().columns.adjust().draw()
    //$('#gvwData1').dataTable().fnAddData([{
    //    "id": "xx",
    //    "country_code": "<select id='ddlEx' class='form-control'>"
    //        + "<option value='1'>1</option><option value='2'>2</option></select>",
    //    "title": "<input type='text' id='txttitle' class='form-control'>",
    //    "pubdate": "<input type='text' id='txtpubdate' class='form-control'>",
    //    "url": "http://..."
    //  , "": "<button id='btnEdit' type='button' onclick='AddItemSave(this)' class='btn btn-success'>บันทึก</button>&nbsp;<button id='btnDel' type='button'  onclick='AddItemCancel(this)' class='btn btn-warning'>ยกเลิก</button>"
    //}]);
};
function AddItemSave($btnRow, sRow, objData, sTableID) {

    var form = $($btnRow).closest('tr');
    //$('#gvwDataCar').dataTable().fnUpdate( ['a', 'b', 'c', 'd', 'e'], 1 ); // Row
    var nRowIndex = sRow;//form[0]._DT_RowIndex;

    //objData.rID = 9;
    var newRow = $('#' + sTableID.id + '').dataTable().fnFindCellRowIndexes(nRowIndex, 24);
    $('#' + sTableID.id + '').dataTable().fnUpdate(objData, newRow); // Row

};
function AddItemCancel($btnRow, sRow, sTableID) {
    var $form = $($btnRow).closest('tr');
    $('#' + sTableID.id + '').dataTable().fnDeleteRow($form);
};

function DelectItem($btnRow, sRow, sTableID) {
    var $form = $($btnRow).closest('tr');
    $('#' + sTableID.id + '').dataTable().fnDeleteRow($form);
};


/*==== Action Control ====*/

function DDLOnChangeSetvalueToControl(objDDl) {
    var aDDLID = Enumerable.From(objDDl).ToArray();
    if (aDDLID.length > 0) {
        aDDLID.forEach(function (value) {
            var $aDDLID = $('select[id$=' + value.InputID + ']');
            $aDDLID.on("change", function () {
                var sValue = $(this).val();
                var lstTarget = value.InputTarget;
                if (sValue != "") {
                    var sValueText = GetTextDropdownText(value.InputID);
                    lstTarget.forEach(function (value2) {

                        if (value2.ValueType + "" == "val") $("" + value2.InputType + "[id$='" + value2.InputID + "']").val(sValue);
                        else {
                            $("" + value2.InputType + "[id$='" + value2.InputID + "']").val(sValueText);
                        }
                    });
                }
                else {
                    lstTarget.forEach(function (value2) {

                        if (value2.ValueType + "" == "val") $("" + value2.InputType + "[id$='" + value2.InputID + "']").val('');
                        else {
                            $("" + value2.InputType + "[id$='" + value2.InputID + "']").val('');
                        }
                    });
                }
            });
        });
    }
}
/*==== Set FancyBOX ====*/
function SetFancyBox() {
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            overlay: {
                locked: true,
            }
        }
    });
}

function SetFancyBoxInTable() {
    $(".fancybox-table").fancybox({
        //autoScale: false,
        'scrolling': 'auto',
        // href : $('.fancybox').attr('id'), // don't need this
        type: 'iframe',
        padding: 0,
        //width: "100%",
        autoSize: true,
        autoScale: true,
        scrolling: true,
    });
}
/*==== Number to Money format ====*/
/*==== Ex 1 (123456789.12345).formatMoney(2, '.', ','); ====*/
/*==== Ex 2 (123456789.12345).formatMoney(2); ====*/
function StringtomoneyNoDecimal(strNumber) {
    var nNumber = Number(ConvertToIntNotnull(strNumber));
    //$Accept.text((1000).formatMoney(2));
    return nNumber.formatMoney(0);
}
function Stringtomoney(strNumber) {
    var nNumber = Number(ConvertToIntNotnull(strNumber));
    //$Accept.text((1000).formatMoney(2));
    return nNumber.formatMoney(2);
}
function StringtomoneyDecimal(strNumber) {
    var nNumber = Number(ConvertToFloatNotnull(strNumber));
    //$Accept.text((1000).formatMoney(2));
    return nNumber.formatMoney(2);
}
Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
function StringtoInt(strNumber) {
    var number = 0;
    if (strNumber != undefined && strNumber != null) {
        number = Number(strNumber.replace(/(?!^-)[^0-9.]/g, ""));
    }
    return number;
}
function StringtoIntNb(strNumber) {
    var nNumber = Number(ConvertToIntNotnull(strNumber));
    //$Accept.text((1000).formatMoney(2));
    return nNumber.formatMoney(0);
}


function PopupCenter(url, title, w, h, tab2) {
    // Fixes dual-screen position                         Most browsers      Firefox  
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    if (tab2 != undefined && ConvertToIntNotnull(tab2) != 0) {
        left = left + (tab2 * 20);
        top = top + (tab2 * 20);
    }
    var newWindow = window.open(url, title, 'scrollbars=yes,status=yes,resizable=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow  
    if (window.focus) {
        newWindow.focus();
    }
}



function setTime() {
    $('.inpTime')
        .keydown(function (e) {
            if (e.which == 13) { //keyCode - ENTER : 13
                return false;
            }
        })
        .clockpicker({
            placement: 'bottom',
            align: 'right',
            autoclose: true,
            'default': 'now'
        })
        .change(function () {
            var thisVal = $(this).val().replace(':', '');
            var setVal = "";
            if (thisVal.length == 4) {
                setVal = thisVal.substr(0, 2) + ":" + thisVal.substr(2, 3);
                if (setVal == '24:00') $(this).val('00:00');
                var isValid = false;
                var arrTime = setVal.split(':');
                if (arrTime.length == 2) {
                    var hour = arrTime[0].trim();
                    var minute = arrTime[1].trim();
                    if (hour.length >= 1 && hour.length <= 2 && minute.length >= 1 && minute.length <= 2) {
                        if (!isNaN(hour) && !isNaN(minute)) {
                            isValid = hour >= 0 && hour < 24 && minute >= 0 && minute <= 59;
                            $(this).val(setVal);

                        }
                    }
                } else if ($(this).val('')) isValid = true;
                if (!isValid) $(this).val('');
            } else {
                $(this).val('');
            }
        }).next().click(function () {

            $(this).clockpicker('show');
        });
}

function CreateRadioOfPage(sID) {
    var sHtml = '<input type="checkbox" id="' + sID + 'chkRow" name="' + sID + '" class="flat-green" value="Y"  />';
    return sHtml;
}
function CreateRadioOfPageX(sID) {
    var sHtml = "";
    if (sID != undefined && sID != "") {
        sHtml = '<input type="checkbox" id="chkX' + sID + '-chkRow" name="chk' + sID + '" class="flat-green" value="Y"  />&nbsp;รับ&nbsp;&nbsp;';
    }
    else {
        sHtml = "";
    }


    return sHtml;
}
function CreateRadioOfPageXY(sID) {
    var sHtml = "";
    if (sID != undefined && sID != "") {
        sHtml = '<input type="checkbox" id="chkX' + sID + '-chkRow" name="chk' + sID + '" class="flat-green" value="Y"  />&nbsp;รับ&nbsp;&nbsp;' +
            '<input type="checkbox" id="chkY' + sID + '-chkRow"  name="chk' + sID + '" id="rdBlue" class="flat-green" value="N"   />&nbsp;ไม่รับ';
    }
    else {
        sHtml = "";
    }


    return sHtml;
}

function CreateRadioOfPageAB(sID) {
    var sHtml = "";
    if (sID != undefined && sID != "") {
        sHtml = '<input type="checkbox" id="chkX' + sID + '-chkRow" name="chk' + sID + '" class="flat-green" value="Y"  />&nbsp;อนุมัติ&nbsp;&nbsp;' +
            '<input type="checkbox" id="chkY' + sID + '"  name="chk' + sID + '" id="rdBlue" class="flat-green" value="N"   />&nbsp;ไม่อนุมัติ';
    }
    else {
        sHtml = "";
    }


    return sHtml;
}

function CreateRadioOfPageAB(sID) {
    var sHtml = "";
    if (sID != undefined && sID != "") {
        sHtml = '<input type="checkbox" id="chkX' + sID + '-chkRow" name="chk' + sID + '" class="flat-green" value="Y"  />&nbsp;อนุมัติ&nbsp;&nbsp;' +
            '<input type="checkbox" id="chkY' + sID + '"  name="chk' + sID + '" id="rdBlue" class="flat-green" value="N"   />&nbsp;ไม่อนุมัติ';
    }
    else {
        sHtml = "";
    }


    return sHtml;
}
function CreateSingleCheckBok(sID, sValue) {
    var sHtml = "";
    var sChecked = "";
    if (sID != undefined && sID != "") {
        if (sValue != undefined && sValue == "Y") {
            sChecked = "checked";
        }
        sHtml = '<input type="checkbox" id="' + sID + '" name="' + sID + '" class="flat-green" value="Y" ' + sChecked + '  />';
    }
    else {
        sHtml = "";
    }
    return sHtml;
}

function chkAll() {
    var sHtml = "<input type='checkbox' id='ckbAll'  class='flat-green' />";
    return sHtml;
}
function chkAllDefChecked() {
    var sHtml = "<input type='checkbox' id='ckbAll'  class='flat-green' checked='true'  value='Y' />";
    return sHtml;
}
//Set Maxlength by MaxLength.min.js

function SetMaxLeangthJS(ObjControl) {
    //  [{ ctrlID: "txtName", ctrlType: "txt,area", MaxLength: "0"},]
    if (ObjControl != undefined) {
        $.each(ObjControl, function (key, data) {
            if (data.ctrlID != undefined && data.ctrlType != undefined && data.MaxLength != undefined) {
                if (data.ctrlType != null && data.ctrlType != "") {
                    if (data.ctrlType == "txt") {
                        GetInputByID(data.ctrlID + "").MaxLength({
                            MaxLength: data.MaxLength,
                            DisplayCharacterCount: false,
                        });
                    }
                    else if (data.ctrlType == "area") {
                        GetTextareaByID(data.ctrlID + "").MaxLength({
                            MaxLength: data.MaxLength,
                            DisplayCharacterCount: false,
                        });
                    }
                }
            }
        });
        //$.each(ObjControl, function (key, data) {
        //    if (data.ctrlID != undefined && data.ctrlType != undefined && data.MaxLength != undefined) {
        //        if (data.ctrlType != null && data.ctrlType != "") {
        //            if (data.ctrlType == "txt") {
        //                $("input[id$=" + data.ctrlID + "]").MaxLength({
        //                    MaxLength: data.MaxLength,
        //                    DisplayCharacterCount: false,
        //                });
        //            }
        //            else if (data.ctrlType == "area") {
        //                $("textarea[id$=" + data.ctrlID + "]").MaxLength({
        //                    MaxLength: data.MaxLength,
        //                    DisplayCharacterCount: false,
        //                });
        //            }
        //        }
        //    }
        //});
    }

}

jQuery.fn.extend({
    renameAttr: function (name, newName, removeData) {
        var val;
        return this.each(function () {
            val = jQuery.attr(this, name);
            jQuery.attr(this, newName, val);
            jQuery.removeAttr(this, name);
            // remove original data
            if (removeData !== false) {
                jQuery.removeData(this, name.replace('data-', ''));
            }
        });
    }
});




function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.round(num * precision) / precision// Math.ceil(num * precision) / precision
}


//integerDigits : จำนวนหลักของของค่าจำนวนเต็ม,digits : จำนวนหลักของค่าทศนิยม
function InputMaskDecimal(objCtrl, integerDigits, digits, allowPlus, allowMinus) {
    //Inputmask
    $(objCtrl).inputmask("decimal", {
        integerDigits: integerDigits, //จำนวนหลักของของค่าจำนวนเต็ม
        digits: digits, //จำนวนหลักของค่าทศนิยม
        radixPoint: '.', //จุดทศนิยม
        groupSeparator: ',', //สัญลักษณ์แบ่งหลัก
        autoGroup: true, //การจัดกลุ่มอัตโนมัตื
        allowPlus: Boolean(allowPlus), //อนุญาตใส่เครื่องหมายบวก
        allowMinus: Boolean(allowMinus), //อนุญาตใส่เครื่องหมายลบ,
        rightAlign: false,
    });
}
function InputMaskDecimalMoney(objCtrl, integerDigits, digits, allowPlus, allowMinus) {
    //Inputmask
    $(objCtrl).inputmask("decimal", {
        integerDigits: integerDigits, //จำนวนหลักของของค่าจำนวนเต็ม
        digits: digits, //จำนวนหลักของค่าทศนิยม
        radixPoint: '.', //จุดทศนิยม
        groupSeparator: ',', //สัญลักษณ์แบ่งหลัก
        autoGroup: true, //การจัดกลุ่มอัตโนมัตื
        allowPlus: Boolean(allowPlus), //อนุญาตใส่เครื่องหมายบวก
        allowMinus: Boolean(allowMinus), //อนุญาตใส่เครื่องหมายลบ,
        rightAlign: true,
    });
}
function InputMaskIntegerNotMoney(objCtrl, integerDigits) {
    //Inputmask
    $(objCtrl).inputmask("decimal", {
        integerDigits: integerDigits, //จำนวนหลักของของค่าจำนวนเต็ม
        allowPlus: false, //อนุญาตใส่เครื่องหมายบวก
        allowMinus: false, //อนุญาตใส่เครื่องหมายลบ,    
        rightAlign: false
    });
}