var notesAudio= {
  c : document.getElementById("c-note"),
  d : document.getElementById("d-note"),
  e : document.getElementById("e-note"),
  f : document.getElementById("f-note"),
  g : document.getElementById("g-note"),
  a : document.getElementById("a-note"),
  b : document.getElementById("b-note"),
};


$(funtion)(){
  $(".box").on("click", function(e){
    var wichNote = $(this).attr("id");
    playNote(wichNote);
  });

  $(document).on("keypress", funtion(e){
    if (e.key === "1") playNote("c");
    if (e.key === "2") playNote("d");
    if (e.key === "3") playNote("e");
    if (e.key === "4") playNote("f");
    if (e.key === "5") playNote("g");
    if (e.key === "6") playNote("a");
    if (e.key === "7") playNote("b");
  });

  function playNote(note){
    notesAudio[note].currentTime = 0;
    notesAudio[note].play();
  }
});
