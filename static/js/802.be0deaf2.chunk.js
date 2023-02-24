"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[802],{7948:function(e,t,n){n.d(t,{Cu:function(){return v},I1:function(){return p},Je:function(){return f},TP:function(){return g},_u:function(){return u},kH:function(){return _},qF:function(){return d},vH:function(){return h}});var i=n(541),a=n(6638),o=n(2872),c=n(4e3),r=n(7134),s=n(1044),l="https://api.themoviedb.org/3",u=function(e,t){s.Z.get(" \n".concat(l,"/movie/").concat(e,"/images?api_key=").concat(r.q,"   ")).then((function(e){var n=e.data;t(i.p.getImageDetails(n))}))},p=function(e,t){s.Z.get("".concat(l,"/person/").concat(e,"?api_key=").concat(r.q)).then((function(e){var n=e.data;t(a.P.addActor(n))}))},d=function(e,t){try{e.length>0&&s.Z.get("".concat(l,"/search/movie?api_key=").concat(r.q,"&query=").concat(e)).then((function(e){var n=e.data;t(o.T.getSearchMovies(n.results))}))}catch(n){console.log(n)}},h=function(e,t){s.Z.get("\n".concat(l,"/person/").concat(e,"?api_key=").concat(r.q)).then((function(e){var n=e.data;console.log(n),t(c.T.getPersonDetails(n))}))},v=function(e,t){s.Z.get("\n".concat(l,"/person/").concat(e,"/movie_credits?api_key=").concat(r.q)).then((function(e){var n=e.data;t(c.T.getPersonMovie(n))}))},f=function(e){s.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(r.q)).then((function(t){var n=t.data;e(o.T.getPopularMovies(n.results))}))},g=function(e,t){s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(r.q)).then((function(e){var n=e.data;t(i.p.getMovieDetails(n))})),e&&u(e,t)},_=function(e,t){s.Z.get("\n\nhttps://api.themoviedb.org/3/search/person?api_key=".concat(r.q,"&query=").concat(e)).then((function(e){var n=e.data;t(c.T.getPeopleDetails(n))}))}},7134:function(e,t,n){n.d(t,{q:function(){return i}});var i="be91785ae562dae75d4f006499f353c9"},9802:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var i=n(2791),a=n(9434),o=n(7689),c=n(7948),r=n(2982),s=n(1087),l=(n(4686),n(184)),u=function(){var e=(0,a.v9)((function(e){return e.people.movies})),t=(e.cast?(0,r.Z)(e.cast):[]).sort((function(e,t){return t.vote_average-e.vote_average}));return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"person__movie-title",children:"Movies"}),(0,l.jsx)("div",{className:"person__movie-list",children:t.map((function(e){var t=e.id,n=e.vote_average,i=e.poster_path,a=e.original_title;return(0,l.jsx)("div",{children:t&&0!==n?(0,l.jsx)("div",{className:"person__movie-item",children:(0,l.jsxs)(s.OL,{to:"movies/".concat(t),children:[(0,l.jsx)("img",{className:"person__movie-img",alt:"",src:i?"https://www.themoviedb.org/t/p/w150_and_h225_bestv2/".concat(i):"https://img.myloview.fr/images/questionnaire-question-mark-sign-query-symbol-asking-man-scholar-pupil-student-thinking-icon-blue-3d-rendering-400-245310281.jpg"}),(0,l.jsx)("h3",{children:a}),(0,l.jsxs)("p",{children:["Average: ",n.toString().slice(0,3)]})]})}):null},t)}))})]})},p=function(){var e=(0,a.v9)((function(e){return e.people.peopleDetails})),t=(0,a.I0)(),n=(0,o.UO)().id,r=(0,o.s0)();return(0,i.useEffect)((function(){(0,c.vH)(n,t),(0,c.Cu)(n,t)}),[n]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:" people__details",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{onClick:function(){r(-1)},children:"Back"}),(0,l.jsx)("h1",{children:e.name}),e.adult?"18+":"",(0,l.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/".concat(e.profile_path),alt:""})]}),(0,l.jsxs)("div",{className:"details__wrap-2",children:[(0,l.jsx)("p",{className:" people__details-descr",children:e.biography}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:" people__details-birthday",children:["Date of Birthday: ",e.birthday]}),(0,l.jsx)("div",{className:" people__details-born",children:e.place_of_birth})]}),(0,l.jsxs)("div",{className:" people__details-popularity",children:["Popularity:"," ",e.popularity&&e.popularity.toLocaleString().slice(0,4),"/100"]}),(0,l.jsxs)("p",{children:["gender:",e.gender]})]})]}),(0,l.jsx)(u,{})]})}},4686:function(){}}]);
//# sourceMappingURL=802.be0deaf2.chunk.js.map