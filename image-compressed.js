$(document).on("change", "#req_paper", function(){
		const file = $(this)[0].files[0];
		$("#req_paper").attr('data_url', '');
		if(file != undefined){
			part =  file.name.split('.');
			ext = part[part.length - 1];
			if(ext == 'jpeg' || ext == 'jpg' || ext == 'png'){
				$("#alert").html(``);
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = function(event){
					const imgElement = document.createElement('img');
					imgElement.src = event.target.result;
					imgElement.onload = function(e){
						const canvas = document.createElement('canvas');
						const MAX_WIDTH = 500;
						const scaleSize = MAX_WIDTH / e.target.width;
						canvas.width = MAX_WIDTH;
						canvas.height = e.target.height * scaleSize;
						const ctx = canvas.getContext('2d');
						ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
						const srcEncoded = ctx.canvas.toDataURL(e.target, 'image/jpeg');
						$("#req_paper").attr('data_url', srcEncoded);
					}
				}
			}else{
				$("#alert").addClass('show').html(`<div class="alert-body text-danger"> <div> <strong>দুঃখিত</strong>সঠিক ফাইল নির্বাচন করুন। </div>
					<a href="">OK</a> </div>`);
				$("#req_paper").val('');
				$("#req_paper").attr('data_url', '');
			}
		}
	})
