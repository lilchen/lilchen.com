!function($){var t=Array.prototype.slice,e=Array.prototype.splice,r={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1},i=$(window),n=$(document),s=[],o=i.height(),a=function(){for(var t=i.scrollTop(),e=n.height(),r=e-o,a=t>r?r-t:0,c=0;c<s.length;c++){var p=s[c],l=p.stickyWrapper.offset().top,u=l-p.topSpacing-a;if(u>=t)null!==p.currentTop&&(p.stickyElement.css({width:"",position:"",top:""}),p.stickyElement.parent().removeClass(p.className),p.stickyElement.trigger("sticky-end",[p]),p.currentTop=null);else{var d=e-p.stickyElement.outerHeight()-p.topSpacing-p.bottomSpacing-t-a;if(0>d?d+=p.topSpacing:d=p.topSpacing,p.currentTop!=d){var h;p.getWidthFrom?h=$(p.getWidthFrom).width()||null:p.widthFromWrapper&&(h=p.stickyWrapper.width()),null==h&&(h=p.stickyElement.width()),p.stickyElement.css("width",h).css("position","fixed").css("top",d),p.stickyElement.parent().addClass(p.className),null===p.currentTop?p.stickyElement.trigger("sticky-start",[p]):p.stickyElement.trigger("sticky-update",[p]),p.currentTop===p.topSpacing&&p.currentTop>d||null===p.currentTop&&d<p.topSpacing?p.stickyElement.trigger("sticky-bottom-reached",[p]):null!==p.currentTop&&d===p.topSpacing&&p.currentTop<d&&p.stickyElement.trigger("sticky-bottom-unreached",[p]),p.currentTop=d}}}},c=function(){o=i.height();for(var t=0;t<s.length;t++){var e=s[t],r=null;e.getWidthFrom?e.responsiveWidth===!0&&(r=$(e.getWidthFrom).width()):e.widthFromWrapper&&(r=e.stickyWrapper.width()),null!=r&&e.stickyElement.css("width",r)}},p={init:function(t){var e=$.extend({},r,t);return this.each(function(){var t=$(this),i=t.attr("id"),n=t.outerHeight(),o=i?i+"-"+r.wrapperClassName:r.wrapperClassName,a=$("<div></div>").attr("id",o).addClass(e.wrapperClassName);t.wrapAll(a);var c=t.parent();e.center&&c.css({width:t.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==t.css("float")&&t.css({"float":"none"}).parent().css({"float":"right"}),c.css("height",n),e.stickyElement=t,e.stickyWrapper=c,e.currentTop=null,s.push(e)})},update:a,unstick:function(t){return this.each(function(){for(var t=this,r=$(t),i=-1,n=s.length;n-->0;)s[n].stickyElement.get(0)===t&&(e.call(s,n,1),i=n);-1!=i&&(r.unwrap(),r.css({width:"",position:"",top:"","float":""}))})}};window.addEventListener?(window.addEventListener("scroll",a,!1),window.addEventListener("resize",c,!1)):window.attachEvent&&(window.attachEvent("onscroll",a),window.attachEvent("onresize",c)),$.fn.sticky=function(e){return p[e]?p[e].apply(this,t.call(arguments,1)):"object"!=typeof e&&e?void $.error("Method "+e+" does not exist on jQuery.sticky"):p.init.apply(this,arguments)},$.fn.unstick=function(e){return p[e]?p[e].apply(this,t.call(arguments,1)):"object"!=typeof e&&e?void $.error("Method "+e+" does not exist on jQuery.sticky"):p.unstick.apply(this,arguments)},$(function(){setTimeout(a,0)})}(jQuery);