window.onload = function() {
  var modalDiv = document.createElement('div');
  modalDiv.setAttribute('id','dialog');
  modalDiv.setAttribute('title','La Barbe !');
  var  paragraph = document.createElement('p');
  paragraph.innerHTML  = "[Insérer ici un texte à la fois drôle et intelligent. Note : trouver quelqu'un capable d'écrire un texte drôle et intelligent.]";

  modalDiv.appendChild(paragraph);
  document.body.appendChild(modalDiv);

  jQuery("#dialog").dialog({
    autoOpen: true, 
    draggable: true,
    resizable: true,
    height: 'auto',
    width: 500,
    zIndex: 999,
    modal: true,
    open: function(event, ui) {
      $(event.target).parent().css('position','fixed');
      $(event.target).parent().css('top', '50px');
      $(event.target).parent().css('left', '50% - 250px');
    }
  });
};