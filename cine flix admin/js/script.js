           var a1 = document.getElementById('year');
           var a2 = document.getElementById('awards');
           var a3 = document.getElementById('directors');
           var a4 = document.getElementById('name');
           var a5 = document.getElementById('banner');
           var a6 = document.getElementById('directors');
           var a7 = document.getElementById('tag');
           var a8 = document.getElementById('video');
           var a9 = document.getElementById('writers');
           var a10 = document.getElementById('cast1');
           var a11 = document.getElementById('cast2');
           var a12 = document.getElementById('cast3');
           var a13 = document.getElementById('cast4');
           var a14 = document.getElementById('cast5');



           const storege = firebase.storage();
           const dbRef = firebase.database().ref().child('lista').push().key;
           const input = document.querySelector('input[type=file]');
           input.addEventListener('change',(e)=>{
               let file = e.target.files[0];

               const uploadTask = storege.ref().child("lista").child(`${e.target.files[0].name}`)
               .put(e.target.files[0]);

               uploadTask.on("state_changed",function(snapshot){

                   let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 1;

                   document.querySelector('progress').value = progress;

               },function(error){},function(){
                   console.log('upload realizado com secesso');


                   uploadTask.snapshot.ref.getDownloadURL().then( function (url_player_filme){

                      console.log("URL Do video: " + url_player_filme)


                      var original = "[{\"profile\":\"x1\"},{\"profile\":\"x2\"},{\"profile\":\"x3\"},{\"profile\":\"x4\"},{\"profile\":\"x5\"}]"
                      var B1 = original.replace("x1",a10.value)
                      var B2 = B1.replace("x2",a11.value)
                      var B3 = B2.replace("x3",a12.value)
                      var B4 = B3.replace("x4",a13.value)
                      var B5 = B4.replace("x5",a14.value)
                      var xx = B5


                      sum(dbRef,xx,a1.value,a2.value,a3.value,a4.value,a5.value,a6.value,a7.value,a8.value,a9.value,url_player_filme);
                      if (a1.value=="", a2.value=="") {
                          
                      } else {
                          
                      }
                   })  


               function sum( id,cast,year,awards,directors,name,banner,description,tag,video,writers,url ) {
                id = id;
                cast = cast;
                year = year;
                awards = awards;
                directors = directors;
                name = name;
                banner = banner;
                description = description;
                tag = tag;
                video = video;
                writers = writers;
                url = url;
               
                firebase.database().ref("lista/"+ dbRef).update({
                id : id,
                cast : cast,
                year : year,
                awards : awards,
                directors : directors,
                name : name,
                banner : banner,
                description : description,
                tag : tag,
                video : video,
                writers : writers,
                url : url,
               });
               }
               })
           });