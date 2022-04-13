class Doc extends document {
  function get_elem(var id) {
    return document.getElementById(id);
  }

  function get_elem(var className) {
    return document.getElementByClassName(className);
  }

  function get_elem(var tag) {
    return document.getElementByTag(tag);
  }

  function get_elems(var id) {
    return document.getElementsById(id);
  }

  function get_elems(var className) {
    return document.getElementsByClassName(className);
  }

  function get_elems(var tag) {
    return document.getElementsByTag(tag);
  }
};

var doc = new Doc();

// same document.getElementById("idname")
// same doc.get_elem(id="idname");
