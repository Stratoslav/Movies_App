"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3],{7948:function(t,n,e){e.d(n,{Cu:function(){return l},I1:function(){return p},Je:function(){return g},TP:function(){return m},_u:function(){return f},kH:function(){return v},qF:function(){return h},vH:function(){return d}});var c=e(541),a=e(6638),o=e(2872),i=e(4e3),r=e(7134),s=e(1044),u="https://api.themoviedb.org/3",f=function(t,n){s.Z.get(" \n".concat(u,"/movie/").concat(t,"/images?api_key=").concat(r.q,"   ")).then((function(t){var e=t.data;n(c.p.getImageDetails(e))}))},p=function(t,n){s.Z.get("".concat(u,"/person/").concat(t,"?api_key=").concat(r.q)).then((function(t){var e=t.data;n(a.P.addActor(e))}))},h=function(t,n){try{t.length>0&&s.Z.get("".concat(u,"/search/movie?api_key=").concat(r.q,"&query=").concat(t)).then((function(t){var e=t.data;n(o.T.getSearchMovies(e.results))}))}catch(e){console.log(e)}},d=function(t,n){s.Z.get("\n".concat(u,"/person/").concat(t,"?api_key=").concat(r.q)).then((function(t){var e=t.data;console.log(e),n(i.T.getPersonDetails(e))}))},l=function(t,n){s.Z.get("\n".concat(u,"/person/").concat(t,"/movie_credits?api_key=").concat(r.q)).then((function(t){var e=t.data;n(i.T.getPersonMovie(e))}))},g=function(t){s.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(r.q)).then((function(n){var e=n.data;t(o.T.getPopularMovies(e.results))}))},m=function(t,n){s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r.q)).then((function(t){var e=t.data;n(c.p.getMovieDetails(e))})),t&&f(t,n)},v=function(t,n){s.Z.get("\n\nhttps://api.themoviedb.org/3/search/person?api_key=".concat(r.q,"&query=").concat(t)).then((function(t){var e=t.data;n(i.T.getPeopleDetails(e))}))}},7134:function(t,n,e){e.d(n,{q:function(){return c}});var c="be91785ae562dae75d4f006499f353c9"},9003:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var c=e(885),a=e(7689),o=e(1087),i=e(2791),r=e(9434),s=e(1044),u=e(7134),f=e(7948),p=e(184),h=function(){var t=(0,i.useState)([]),n=(0,c.Z)(t,2),e=n[0],h=n[1],d=(0,r.I0)(),l=(0,a.UO)().id;return(0,i.useEffect)((function(){try{l&&s.Z.get("https://api.themoviedb.org/3/movie/".concat(l,"/credits?api_key=").concat(u.q)).then((function(t){var n=t.data;h(n.cast)}))}catch(t){console.log(t)}}),[l]),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{className:"cast__list",children:e.map((function(t){var n=t.id,e=t.name,c=t.character,a=t.profile_path;return(0,p.jsx)("li",{className:"cast__list-item",onClick:function(){return(0,f.I1)(n,d)},children:(0,p.jsxs)(o.OL,{to:"/actors/".concat(n),children:[(0,p.jsx)("img",{className:"cast__list-img",width:120,src:a?"https://www.themoviedb.org/t/p/w138_and_h175_face".concat(a):"https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg",alt:"im"}),(0,p.jsx)("p",{className:"actor-character",children:c}),(0,p.jsx)("p",{className:"actor-name",children:e})]})},n)}))})})}}}]);
//# sourceMappingURL=3.94235435.chunk.js.map