var filterApp = new Vue({
  el: '#filterApp',
  data: {
    seeExperienced: true,
    seeNewGrad: true,
    seeStudent: true,
    seeTeacher: true
  },
  methods: {
    filterExperienced: function () {
      	this.seeExperienced = true;
    	this.seeNewGrad = false;
    	this.seeStudent = false;
    	this.seeTeacher = false;
    },
    filterNewGrad: function () {
      	this.seeExperienced = false;
    	this.seeNewGrad = true;
    	this.seeStudent = false;
    	this.seeTeacher = false;
    },
    filterStudent: function () {
      	this.seeExperienced = false;
    	this.seeNewGrad = false;
    	this.seeStudent = true;
    	this.seeTeacher = false;
    },
    filterTeacher: function () {
      	this.seeExperienced = false;
    	this.seeNewGrad = false;
    	this.seeStudent = false;
    	this.seeTeacher = true;
    }
  }
})