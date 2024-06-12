import Swal from "sweetalert2";


export const displaySuccessAlert = (message) => {
    Swal.fire({
        title: '',
        titleText: message,
        icon: 'success'
    });
}


export const triggerErrorAlert = (message) => {
    Swal.fire({
        title: '',
        titleText: message,
        icon: 'error'
    })
}