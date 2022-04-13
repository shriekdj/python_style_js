class Doc extends Document {
  function get_elem(var id) {
    return document.getElementById(id);
  }

  function get_elem(var className) {
    return document.getElementByClassName(className);
  }

  function get_elem(var tagName) {
    return document.getElementByTag(tagName);
  }

  function get_elems(var id) {
    return document.getElementsById(id);
  }

  function get_elems(var className) {
    return document.getElementsByClassName(className);
  }

  function get_elems(var tagName) {
    return document.getElementsByTag(tagName);
  }
};

var doc = new Doc();

// same document.getElementById("idname")
// same doc.get_elem(id="idname");
