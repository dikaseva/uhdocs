<template>
  <nav id="theSidebar" class="sidebar">
    <a id="menuToggle" class="menu-toggle"><span id="theToggle"></span></a>
    <div class="sidebar-wrap">
    <router-link class="logo" to="/"><img src="../../assets/logo.png"></router-link>
      <p class="menu-label"><i class="icon-skill"></i><span>Style</span></p>
        <ul class="menu">
          <li><router-link to="/branding">Branding</router-link></li>
          <li><router-link to="/color">Color</router-link></li>
          <li><router-link to="/icons">Icons</router-link></li>
          <li><router-link to="/typography">Typography</router-link></li>
          <!--<li><router-link to="/layout">Layout</router-link></li>-->
        </ul>
      
      <!--<p class="menu-label"><i class="icon-grid"></i><span>Components</span></p>
        <ul class="menu">
          <li><router-link to="/hiringpipeline">Hiring Pipeline</router-link></li>
          <li><router-link to="/attachments">Attachments</router-link></li>
          <li><router-link to="/buttons">Buttons</router-link></li>
          <li><router-link to="/cards">Cards</router-link></li>
          <li><router-link to="/divider">Divider</router-link></li>
          <li><router-link to="/dropdown">Dropdown</router-link></li>
          <li><router-link to="/forms">Forms</router-link></li>
          <li><router-link to="/toast">Toast</router-link></li>
          <li><router-link to="/labels">Labels</router-link></li>
          <li><router-link to="/links">Links</router-link></li>
          <li><router-link to="/list">List</router-link></li>
          <li><router-link to="/navigation">Navigation</router-link></li>
          <li><router-link to="/teamsmembers">Teams &amp; Members</router-link></li>
        </ul>-->
    </div>
  </nav>  
</template>

<<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'Branding',
          list: [
            {
              name: 'UH JS',
              link: '/uhjs'
            },
            {
              name: 'UH PRO',
              link: '/uhpro'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    function toggleClass(element, className){
    if (!element || !className){
        return;
    }
    
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

document.getElementById('menuToggle').addEventListener('click', function() {
    toggleClass(document.getElementById('theToggle'), 'is-active');
    toggleClass(document.getElementById('theSidebar'), 'is-active');
});
  }
  
}
</script>

<style scoped>
.test-class {
    font-size: 2em;
}
</style>
