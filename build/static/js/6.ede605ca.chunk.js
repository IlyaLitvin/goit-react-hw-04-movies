(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{100:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var a=n(55),r=n.n(a),c=n(56),i=n(11),s=n(12),o=n(14),u=n(13),h=n(1),d=n(0),l=n(57),p=n.n(l),v=n(10),j=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={movies:[]},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(c.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=401d61f37c17d956a98039a1a0734109");case 2:e=t.sent,this.setState({movies:e.data.results});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("h1",{children:"Tranding today"}),this.state.movies.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(v.b,{to:"".concat(t.props.match.url,"movies/").concat(e.id),children:e.name||e.title})},e.id)}))]})})}}]),n}(d.Component)}}]);
//# sourceMappingURL=6.ede605ca.chunk.js.map