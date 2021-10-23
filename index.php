<!DOCTYPE html>
<html>
  <title>Ajax-PHP</title>
  <body>
    <?php 
      if($_SERVER['REQUEST_METHOD'] == 'POST'){
        echo json_encode([$_FILES, $_POST]);
      }
    ?>
  
  
    <form id="myForm">
      <input type="text" name="name">
      <input type="file" name="photo">
      <button id="submitMyForm">Submit</button>
    </form>
    
    <input type="text" id="appendData" name="appendData">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
      $(document).on("click", "#submitMyForm", function(e){
        e.preventDefault();
        var form = $("#myForm")[0];
        var formData = new FormData(form); //all form data add in this object
        
        var appendData = $("#appendData").val(); // if you want to add append data to this object
        form_data.append("appendData", appendData);
        
        $.ajax({
          url: "index.php",
          method: "POST",
          data: formData,
          contentType: false,
          processData: false,
          beforeSend: function () {
            $('.preloader').show();
          },
          complete: function () {
            $('.preloader').hide();
          },
          success: function (res) {
           //if response success
          },
          error: function (e) {
            console.log(e.responseText);
          }
        });
        
      })
    </script>
  </body>
</html>
