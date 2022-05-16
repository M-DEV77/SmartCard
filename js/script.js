/*
  Projeto:SmartCard
  Criador: Marcelo Olimpio
  URL:https://.wbsys.com.br
  Info: cartão de visita 
*/

window.addEventListener("resize", executa); 
    
     function executa(){
        partilha()
        const le= window.innerWidth;
        console.log(le);
     }
     const le= window.innerWidth;
if(le<=400){

    window.scrollTo(0,1);

}

 ////função do qr code 
 window.onload = partilha();
 function partilha(){
      let website = "https://premoaco.com.br/smart-card/cliente.html";
      
        let qrcodeContainer2 = document.getElementById("qrcode");
        qrcodeContainer2.innerHTML = "";

       let largura = window.innerWidth;
       if(largura>1200){
        largura=largura/4;
       }else{
       largura=largura/1.5;
        }
       largura=parseInt(largura);
       console.log(largura);
        new QRCode(qrcodeContainer2, {
          text: website,
          width:largura,
          height:largura,
          colorDark: "#8F0707",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        
      }   
      

function whats(x){
      let website = x;
      if (website) {
        let qrcodeContainer2 = document.getElementById("qrcode");
        qrcodeContainer2.innerHTML = "";

        let largura = window.innerWidth;
       if(largura>1200){
        largura=largura/4;
       }else{
       largura=largura/1.5;
        }
       largura=parseInt(largura);
       console.log(largura);
        new QRCode(qrcodeContainer2, {
          text: website,
          width:largura,
          height:largura,
          colorDark: "#8F0707",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        
      } 
    }

    function email(x){
      let website = x;
      if (website) {
        let qrcodeContainer2 = document.getElementById("qrcode");
        qrcodeContainer2.innerHTML = "";

        let largura = window.innerWidth;
       if(largura>1200){
        largura=largura/4;
       }else{
       largura=largura/1.5;
        }
       largura=parseInt(largura);
       console.log(largura);
        new QRCode(qrcodeContainer2, {
          text: website,
          width:largura,
          height:largura,
          colorDark: "#8F0707",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        
      } 
    }

    function tel(x){
      let website = x;
      if (website) {
        let qrcodeContainer2 = document.getElementById("qrcode");
        qrcodeContainer2.innerHTML = "";

        let largura = window.innerWidth;
       if(largura>1200){
        largura=largura/4;
       }else{
       largura=largura/1.5;
        }
       largura=parseInt(largura);
       console.log(largura);
        new QRCode(qrcodeContainer2, {
          text: website,
          width:largura,
          height:largura,
          colorDark: "#8F0707",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        
      } 
    }

    function site(x){
      let website = x;
      if (website) {
        let qrcodeContainer2 = document.getElementById("qrcode");
        qrcodeContainer2.innerHTML = "";

        let largura = window.innerWidth;
       if(largura>1200){
        largura=largura/4;
       }else{
       largura=largura/1.5;
        }
       largura=parseInt(largura);
       console.log(largura);
        new QRCode(qrcodeContainer2, {
          text: website,
          width:largura,
          height:largura,
          colorDark: "#8F0707",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        
      } 
    }

 ////função do qr code 


function share(rede){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Smartcard',
			text: 'Smartcard Paulo',
			url:rede,
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}
   
function ingles(){
    document.getElementById("btn2").style.display="block";
    document.getElementById("btn1").style.display="none";
    console.log("ingles")
    document.getElementById("titulo").innerHTML="Construtora & Incorporadora";
    document.getElementById("infTitulo").innerHTML="<b>Informações:</b>";
    document.getElementById("itemTexto").innerHTML="<b>Informações:</b>";
    document.getElementById("telefone").innerHTML="<b>Telefone:</b> +55 41-3667-8384";
    document.getElementById("part").innerHTML="<b>Partihar</b>";
    document.getElementById("textoInfo").innerHTML=" A Construtora e Incorporadora Premoaço é reconhecida pela"+
 "criatividade e inovação sendo destaque no mercado nacional "+ 
 "pela qualidade, tradição e pelo compromisso com rigorosos prazos de entrega. "+
 "Reconhecida pela criatividade e inovação, a Premoaço "+ 
 "construtora e incorporadora é destaque no mercado nacional "+ 
 "pela qualidade e os rigorosos prazos de entrega. "+
 "A Premoaço tem mais de 40 anos de atuação no mercado imobiliário "+ 
 "e se encontra hoje em fase de expansão nos segmentos de "+ 
 "incorporação residencial, incorporação comercial e locação "+ 
 "de imóveis corporativos, logísticos,  entre outros. ";

}

function portugues(){
    document.getElementById("btn1").style.display="block";
    document.getElementById("btn2").style.display="none";
    console.log("portugues")
    document.getElementById("titulo").innerHTML="Builder & Developer";
    document.getElementById("infTitulo").innerHTML="<b>Information:</b>";
    document.getElementById("itemTexto").innerHTML="<b>Information:</b>";
    document.getElementById("telefone").innerHTML="<b>Telephone:</b> +55 41-3667-8384";
    document.getElementById("part").innerHTML="<b>Share:</b>";
    document.getElementById("textoInfo").innerHTML=
 "Builder & Developer Premoaço is recognized by the"+  
 "creativity and innovation being highlighted in the national market "+
 "for quality, tradition and commitment to strict delivery times."+
 "Recognized for creativity and innovation, Premoaço "+
 "construction company and developer stands out in the national market "+
 "for quality and strict delivery times. "+
 "Premoaço has more than 40 years of experience in the real estate market "+
 "and is currently in a phase of expansion in the segments of "+
 "residential development, commercial development and leasing "+
 "of corporate and logistical properties, among others.";
    

}