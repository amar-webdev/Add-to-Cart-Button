// Show preview
function showImgPreview() {
    $('.preview-container').show();
    $('#prev-img').attr('src', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693010532692');
  }
  
  // Hide Preview
  function hidePreview() { $('.preview-container').hide(); }
  function showAlert(mess) { 
    Swal.fire({ position: 'center', icon: 'success', title: '', text: mess, showConfirmButton: false, timer: 1500 }); 
  }