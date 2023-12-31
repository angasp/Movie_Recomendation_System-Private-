(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
	[0],
	{
		321: function (e, t, a) {},
		322: function (e, t, a) {},
		547: function (e, t, a) {},
		549: function (e, t, a) {},
		553: function (e, t, a) {
			"use strict";
			a.r(t);
			var n = a(1),
				r = a(0),
				i = a.n(r),
				s = a(226),
				c = a(151),
				o = a(272),
				l = localStorage.getItem("language");
			l || (l = "en-US"),
				s.a
					.use(o.a)
					.use(c.e)
					.init({
						lng: l,
						fallbackLng: "en-US",
						whitelist: ["en-US", "fr-FR"],
						backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
						debug: !1,
						interpolation: { escapeValue: !1 },
					});
			s.a;
			var d = a(11),
				u = a.n(d),
				m = (a(321), a(322), a(40)),
				j = a(14),
				b = a(88),
				p = a.n(b),
				h = a(117),
				g = a(18),
				x = a.n(g),
				f = "login_user",
				O = "register_user",
				v = "update_user",
				y = "auth_user",
				w = "logout_user",
				_ = "/api/users",
				S = "https://api.themoviedb.org/3/",
				N = "844dba0bfd8f3a4f3799f6130ef9e335",
				C = localStorage.getItem("language"),
				k = "https://image.tmdb.org/t/p/",
				I = "w1280",
				F = "w500",
				M = { "Content-Type": "application/json" };
			function T() {
				var e = x.a.get("".concat(_, "/auth")).then(function (e) {
					return e.data;
				});
				return { type: y, payload: e };
			}
			var z = a(23);
			function q(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
				function a(a) {
					var i = Object(z.c)(function (e) {
							return e.user;
						}),
						s = Object(z.b)();
					return (
						Object(r.useEffect)(
							function () {
								s(T()).then(
									(function () {
										var e = Object(h.a)(
											p.a.mark(function e(n) {
												return p.a.wrap(function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (e.next = 2), !n.payload.isAuth;
															case 2:
																if (!e.sent) {
																	e.next = 6;
																	break;
																}
																t && a.history.push("/login"), (e.next = 7);
																break;
															case 6:
																!1 === t && a.history.push("/landing");
															case 7:
															case "end":
																return e.stop();
														}
												}, e);
											})
										);
										return function (t) {
											return e.apply(this, arguments);
										};
									})()
								);
							},
							[s, a.history]
						),
						Object(n.jsx)(e, Object(j.a)(Object(j.a)({}, a), {}, { user: i }))
					);
				}
				return a;
			}
			var E = a(288),
				R = a(140),
				A = a(141);
			function D() {
				var e = Object(R.a)([
					"\n  border: 4px solid #757575; /* grey */\n  border-top: 5px solid #19ba90; /* Blixbox green */\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  animation: spin 0.8s linear infinite;\n  margin: 20px auto;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n",
				]);
				return (
					(D = function () {
						return e;
					}),
					e
				);
			}
			var P = A.a.div(D()),
				L = function () {
					return Object(n.jsx)(P, {});
				},
				B = a(57),
				U = a.n(B),
				W = (a(359), a(7)),
				Y = a(603),
				H = a(105),
				V = a(136),
				$ = a(74),
				Z = a(587),
				X = Y.a.Title;
			var G = function (e) {
					var t = e.landing,
						a = e.genre;
					return t
						? Object(n.jsx)("div", {
								style: {
									background:
										"linear-gradient(to bottom, rgba(0,0,0,0)\n            39%,rgba(0,0,0,0)\n            41%,rgba(0,0,0,0.65)\n            100%),\n            url('".concat(
											e.image,
											"'), #1c1c1c"
										),
									height: "400px",
									backgroundSize: "100%, cover",
									backgroundPosition: "center, center",
									backgroundPositionY: "9px",
									width: "100%",
									position: "relative",
								},
						  })
						: a
						? Object(n.jsx)("div", {
								style: {
									background:
										"linear-gradient(to bottom, rgba(0,0,0,0)\n            39%,rgba(0,0,0,0)\n            41%,rgba(0,0,0,0.65)\n            100%),\n            url('".concat(
											e.image,
											"'), #1c1c1c"
										),
									height: "400px",
									backgroundSize: "100%, cover",
									backgroundPosition: "center, center",
									backgroundPositionY: "9px",
									width: "100%",
									position: "relative",
								},
								children: Object(n.jsx)("div", {
									children: Object(n.jsx)("div", {
										style: {
											backgroundColor: "rgba(0, 0, 0, 0.5)",
											borderRadius: "10px",
											padding: "10px",
											position: "absolute",
											maxWidth: "500px",
											bottom: "2rem",
											marginLeft: "2rem",
										},
										children: Object(n.jsxs)(X, {
											style: { color: "white" },
											level: 2,
											children: [" ", e.genreName],
										}),
									}),
								}),
						  })
						: void 0;
				},
				J = a(601),
				K = a(611),
				Q = a(124),
				ee = a.n(Q);
			var te = function (e) {
				var t = Object(E.a)().t,
					a = e.actor,
					r = e.movie,
					i = e.image,
					s = e.movieId,
					c = e.movieName,
					o = e.actorName,
					l = e.charName,
					d = e.date,
					u = e.vote,
					m = e.movieGenre,
					j = "#999",
					b = "#cd5c5c",
					p = "#ffa500",
					h = "#52c41a",
					g = (function (e) {
						var t = h;
						return (
							e && 0 !== u ? (e < 5.5 ? (t = b) : e < 7 && (t = p)) : (t = j), t
						);
					})(u);
				return void 0 !== a
					? Object(n.jsx)($.a, {
							lg: 4,
							md: 6,
							xs: 24,
							children: Object(n.jsx)("div", {
								style: {
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								},
								children: Object(n.jsxs)(J.a, {
									hoverable: !0,
									style: { width: "100%" },
									alt: c,
									cover: Object(n.jsx)("img", {
										alt: o,
										src: i
											? "".concat(k).concat("w154").concat(i)
											: "https://res.cloudinary.com/dkyqbngya/image/upload/v1586537514/twdjio2duy8ebxulqwti.png",
									}),
									children: [
										Object(n.jsx)("h3", {
											style: { textAlign: "center", fontWeight: "bold" },
											children: o,
										}),
										Object(n.jsx)("h5", {
											style: { textAlign: "center", fontWeight: "bold" },
											children: l,
										}),
									],
								}),
							}),
					  })
					: void 0 !== r
					? Object(n.jsx)($.a, {
							lg: 4,
							md: 6,
							xs: 24,
							children: Object(n.jsx)("div", {
								style: { position: "relative" },
								children: Object(n.jsx)(K.a, {
									style: { backgroundColor: g },
									offset: [-15, 15],
									count: u,
									children: Object(n.jsxs)(J.a, {
										className: "posterCard",
										hoverable: !0,
										style: { width: "100%", height: "100%" },
										alt: c,
										cover: Object(n.jsx)("img", {
											onClick: function () {
												return (window.location.href = "/movie/" + s);
											},
											alt: c,
											src: i ? "".concat(i) : t("landing.notAvail"),
										}),
										children: [
											Object(n.jsx)("a", {
												style: { color: "black" },
												href: "/movie/".concat(s),
												children: Object(n.jsxs)("div", {
													style: { textAlign: "center", fontWeight: "bold" },
													children: [
														c,
														" (",
														d ? ee()(new Date(d)).format("YYYY") : "N/A",
														")",
													],
												}),
											}),
											Object(n.jsx)("br", {}),
											Object(n.jsx)("div", {
												style: { textAlign: "center" },
												children: m,
											}),
										],
									}),
								}),
							}),
					  })
					: void 0;
			};
			function ae() {
				var e = Object(R.a)([
					"\n  max-width: 1280px;\n  width: 100%;\n  height: 55px;\n  background: white;\n  margin: 0 auto;\n  border-radius: 40px;\n  border: solid 0.5px black;\n  position: relative;\n  color: black;\n\n  .fa-search {\n    position: absolute;\n    left: 20px;\n    top: 12px;\n    color: black;\n    z-index: auto;\n  }\n\n  input {\n    font-family: 'Abel', sans-serif;\n    font-size: 28px;\n    position: absolute;\n    left: 0px;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height: 40px;\n    color: black;\n    box-sizing: border-box;\n\n    :focus {\n      outline: none;\n    }\n\n    @media screen and (max-width: 720px) {\n      font-size: 28px;\n    }\n  }\n",
				]);
				return (
					(ae = function () {
						return e;
					}),
					e
				);
			}
			function ne() {
				var e = Object(R.a)([
					"\n  width: 100%;\n  height: 105px;\n  background: white;\n  padding: 25px 20px 0px 20px;\n  box-sizing: border-box;\n  color: black;\n",
				]);
				return (
					(ne = function () {
						return e;
					}),
					e
				);
			}
			var re = A.a.div(ne()),
				ie = A.a.div(ae()),
				se = a(304),
				ce = function (e) {
					var t = e.callback,
						a = Object(E.a)().t,
						i = Object(r.useState)(""),
						s = Object(W.a)(i, 2),
						c = s[0],
						o = s[1],
						l = Object(r.useRef)(null),
						d = function (e) {
							var a = e.target.value;
							clearTimeout(l.current),
								o(a),
								(l.current = setTimeout(function () {
									t(a);
								}, 500));
						};
					return Object(n.jsx)(re, {
						children: Object(n.jsxs)(ie, {
							children: [
								Object(n.jsx)(se.a, {
									className: "fa-search",
									style: { fontSize: "30px" },
								}),
								Object(n.jsx)("input", {
									type: "text",
									className: "large",
									placeholder: a("landing.search"),
									onChange: d,
									value: c,
								}),
								Object(n.jsx)("input", {
									type: "text",
									className: "small",
									placeholder: a("landing.searchSmall"),
									onChange: d,
									value: c,
								}),
							],
						}),
					});
				},
				oe = a(49),
				le = a(614),
				de = a(221),
				ue = a.n(de),
				me = a(48),
				je = localStorage.getItem("language"),
				be = new Date();
			var pe = Y.a.Title,
				he = new Date(),
				ge = function () {
					var e = (function () {
							var e = Object(r.useState)({ Movies: [] }),
								t = Object(W.a)(e, 2),
								a = t[0],
								n = t[1],
								i = Object(r.useState)(!0),
								s = Object(W.a)(i, 2),
								c = s[0],
								o = s[1],
								l = Object(r.useState)(!1),
								d = Object(W.a)(l, 2),
								u = d[0],
								m = d[1],
								b = Object(r.useState)(""),
								g = Object(W.a)(b, 2),
								x = g[0],
								f = g[1],
								O = Object(r.useState)("popularity.desc"),
								v = Object(W.a)(O, 2),
								y = v[0],
								w = v[1],
								_ = Object(r.useState)({ min: 0, max: 10 }),
								C = Object(W.a)(_, 2),
								k = C[0],
								I = C[1],
								F = Object(r.useState)({ min: 1980, max: 2020 }),
								M = Object(W.a)(F, 2),
								T = M[0],
								z = M[1],
								q = Object(r.useState)([]),
								E = Object(W.a)(q, 2),
								R = E[0],
								A = E[1],
								D = Object(r.useRef)(null),
								P = Object(r.useRef)(null),
								L = (function () {
									var e = Object(h.a)(
										p.a.mark(function e(t) {
											var a, r;
											return p.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	m(!1),
																	o(!0),
																	(a = t.search("page")),
																	(e.prev = 3),
																	(e.next = 6),
																	fetch(t)
																);
															case 6:
																return (e.next = 8), e.sent.json();
															case 8:
																(r = e.sent),
																	n(function (e) {
																		return Object(j.a)(
																			Object(j.a)({}, e),
																			{},
																			{
																				Movies:
																					-1 !== a
																						? [].concat(
																								Object(me.a)(e.Movies),
																								Object(me.a)(r.results)
																						  )
																						: Object(me.a)(r.results),
																				CurrentPage: r.page,
																				totalPages: r.total_pages,
																			}
																		);
																	}),
																	(e.next = 15);
																break;
															case 12:
																(e.prev = 12), (e.t0 = e.catch(3)), m(!0);
															case 15:
																o(!1);
															case 16:
															case "end":
																return e.stop();
														}
												},
												e,
												null,
												[[3, 12]]
											);
										})
									);
									return function (t) {
										return e.apply(this, arguments);
									};
								})();
							return (
								Object(r.useEffect)(
									function () {
										var e = localStorage.getItem("language");
										L(
											""
												.concat(S, "discover/movie?api_key=")
												.concat(N, "&language=")
												.concat(e, "&vote_count.gte=2500&sort_by=")
												.concat(y, "&primary_release_year=")
												.concat(x, "&vote_average.gte=")
												.concat(k.min, "&vote_average.lte=")
												.concat(k.max, "&primary_release_date.gte=")
												.concat(T.min, "-01-01&primary_release_date.lte=")
												.concat(
													T.max === be.getFullYear()
														? (function (e) {
																var t = e.getFullYear().toString(),
																	a = (e.getMonth() + 1).toString(),
																	n = e.getDate().toString(),
																	r = a.split(""),
																	i = n.split("");
																return (
																	t +
																	"-" +
																	(r[1] ? a : "0" + r[0]) +
																	"-" +
																	(i[1] ? n : "0" + i[0])
																);
														  })(be)
														: T.max + "-12-31",
													"&with_genres="
												)
												.concat(R)
										);
									},
									[je, x, y, k.min, k.max, T.min, T.max, R]
								),
								[
									{
										item: a,
										loading: c,
										error: u,
										year: x,
										sort: y,
										rating: k,
										yearRange: T,
										genreID: R,
										selectEl: D,
										selectElPop: P,
									},
									L,
									function (e) {
										z({ min: 1980, max: 2020 }), f(e.target.value), o(!1);
									},
									function (e) {
										w(e.target.value), o(!1);
									},
									function (e) {
										w("popularity.desc"), I(e), o(!1);
									},
									function (e) {
										f(""), (D.current.value = ""), z(e), o(!1);
									},
									function (e) {
										A(e.target.value), o(!1);
									},
									function () {
										(D.current.value = ""),
											(P.current.value = "popularity.desc"),
											f(""),
											A(""),
											I({ min: 0, max: 10 }),
											z({ min: 1980, max: 2020 }),
											w("popularity.desc"),
											o(!1);
									},
								]
							);
						})(),
						t = Object(W.a)(e, 8),
						a = t[0],
						s = a.item,
						c = s.Movies,
						o = s.CurrentPage,
						l = s.totalPages,
						d = a.loading,
						u = a.error,
						m = a.year,
						b = a.sort,
						g = a.rating,
						x = a.yearRange,
						f = a.genreID,
						O = a.selectEl,
						v = a.selectElPop,
						y = t[1],
						w = t[2],
						_ = t[3],
						I = t[4],
						M = t[5],
						T = t[6],
						z = t[7],
						q = Object(r.useState)(""),
						R = Object(W.a)(q, 2),
						A = R[0],
						D = R[1],
						P = Object(r.useState)(!1),
						B = Object(W.a)(P, 2),
						U = B[0],
						Y = B[1],
						X = Object(r.useRef)(null),
						J = Object(E.a)().t;
					function K(e) {
						var t = e.getFullYear().toString(),
							a = (e.getMonth() + 1).toString(),
							n = e.getDate().toString(),
							r = a.split(""),
							i = n.split("");
						return (
							t + "-" + (r[1] ? a : "0" + r[0]) + "-" + (i[1] ? n : "0" + i[0])
						);
					}
					Object(r.useEffect)(function () {
						window.addEventListener("scroll", ee);
					}, []);
					var Q = [
							{ id: 28, name: J("genre.Action") },
							{ id: 12, name: J("genre.Adventure") },
							{ id: 16, name: J("genre.Animation") },
							{ id: 35, name: J("genre.Comedy") },
							{ id: 80, name: J("genre.Crime") },
							{ id: 99, name: J("genre.Documentary") },
							{ id: 18, name: J("genre.Drama") },
							{ id: 10751, name: J("genre.Family") },
							{ id: 14, name: J("genre.Fantasy") },
							{ id: 36, name: J("genre.History") },
							{ id: 27, name: J("genre.Horror") },
							{ id: 10402, name: J("genre.Music") },
							{ id: 9648, name: J("genre.Mystery") },
							{ id: 10749, name: J("genre.Romance") },
							{ id: 878, name: J("genre.Sci-Fi") },
							{ id: 10770, name: J("genre.TV-Movie") },
							{ id: 53, name: J("genre.Thriller") },
							{ id: 10752, name: J("genre.War") },
							{ id: 37, name: J("genre.Western") },
						],
						ee = function (e) {
							var t =
									"innerHeight" in window
										? window.innerHeight
										: document.documentElement.offsetHeight,
								a = document.body,
								n = document.documentElement,
								r = Math.max(a.scrollHeight, a.offsetHeight, n.clientHeight);
							t + window.pageYOffset >= r - 1 && X.current && X.current.click();
						},
						ae = new Date().getFullYear(),
						ne = Object(le.a)({
							scriptUrl: "//at.alicdn.com/t/font_1804216_tqdqw1tcevm.js",
						});
					return u
						? Object(n.jsx)("div", {
								style: {
									width: "100%",
									fontSize: "1.5rem",
									height: "200px",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								},
								children: "Woops! Something went very wrong...",
						  })
						: Object(n.jsxs)("div", {
								style: { width: "100%", margin: "0" },
								children: [
									Object(n.jsx)(G, {
										landing: !0,
										image:
											"https://res.cloudinary.com/dkyqbngya/image/upload/v1586011642/czr9s0nxspurc9blgn9l.jpg",
									}),
									Object(n.jsx)(ce, {
										callback: function (e) {
											var t = e
												? ""
														.concat(S, "search/movie?api_key=")
														.concat(N, "&language=")
														.concat(C, "&query=") + e
												: ""
														.concat(S, "discover/movie?api_key=")
														.concat(N, "&language=")
														.concat(C, "&vote_count.gte=2500&sort_by=")
														.concat(b, "&primary_release_year=")
														.concat(m, "&primary_release_date.gte=")
														.concat(x.min, "-01-01&primary_release_date.lte=")
														.concat(
															x.max === he.getFullYear()
																? K(he)
																: x.max + "-12-31",
															"&with_genres="
														)
														.concat(f);
											D(e), y(t);
										},
									}),
									Object(n.jsx)("div", {
										style: { display: "flex", justifyContent: "center" },
										children: Object(n.jsx)(H.a, {
											type: "primary",
											shape: "round",
											onClick: function () {
												Y(!U);
											},
											style: { fontSize: "1rem" },
											children: J(
												U ? "filters.dontShowFilters" : "filters.showFilters"
											),
										}),
									}),
									U &&
										Object(n.jsxs)("div", {
											style: {
												width: "85%",
												margin: "1rem auto",
												justifyContent: "center",
											},
											children: [
												Object(n.jsx)("br", {}),
												Object(n.jsxs)(V.a, {
													gutter: [8, 8],
													children: [
														Object(n.jsx)($.a, {
															span: 12,
															children: Object(n.jsxs)("form", {
																style: { textAlign: "center" },
																children: [
																	Object(n.jsx)("label", {
																		style: { padding: "10px" },
																		children: Object(n.jsxs)("b", {
																			children: [J("filters.sortMovies"), ":"],
																		}),
																	}),
																	Object(n.jsxs)("select", {
																		name: "sortBy",
																		onChange: _,
																		ref: v,
																		children: [
																			Object(n.jsx)("option", {
																				value: "popularity.desc",
																				children: J("filters.sortMovies"),
																			}),
																			Object(n.jsx)("option", {
																				value: "primary_release_date.desc",
																				children: J("filters.releaseYearHigh"),
																			}),
																			Object(n.jsx)("option", {
																				value: "primary_release_date.asc",
																				children: J("filters.releaseYearLow"),
																			}),
																			Object(n.jsx)("option", {
																				value: "original_title.asc",
																				children: J("filters.titleName"),
																			}),
																			Object(n.jsx)("option", {
																				value: "vote_average.desc",
																				children: J("filters.ratingHigh"),
																			}),
																			Object(n.jsx)("option", {
																				value: "vote_average.asc",
																				children: J("filters.ratingLow"),
																			}),
																		],
																	}),
																],
															}),
														}),
														Object(n.jsx)("br", {}),
														Object(n.jsx)($.a, {
															span: 12,
															children: Object(n.jsxs)("div", {
																style: {
																	display: "flex",
																	justifyContent: "center",
																},
																children: [
																	Object(n.jsx)("p", {
																		style: {
																			display: "flex",
																			justifyContent: "center",
																			paddingRight: "20px",
																		},
																		children: Object(n.jsx)("b", {
																			children: J("filters.rating"),
																		}),
																	}),
																	Object(n.jsx)(ue.a, {
																		className: "input-range",
																		maxValue: 10,
																		minValue: 0,
																		value: g,
																		onChange: function (e) {
																			return I(e);
																		},
																	}),
																],
															}),
														}),
														Object(n.jsx)("br", {}),
													],
												}),
												Object(n.jsxs)(V.a, {
													gutter: [8, 8],
													children: [
														Object(n.jsx)($.a, {
															span: 12,
															children: Object(n.jsxs)("form", {
																style: { textAlign: "center" },
																children: [
																	Object(n.jsx)("label", {
																		style: { padding: "10px" },
																		children: Object(n.jsxs)("b", {
																			children: [J("filters.sortYear"), ":"],
																		}),
																	}),
																	Object(n.jsxs)("select", {
																		onChange: w,
																		ref: O,
																		children: [
																			Object(n.jsx)("option", {
																				value: "",
																				children: J("filters.year"),
																			}),
																			Array.from(
																				new Array(41),
																				function (e, t) {
																					return Object(n.jsx)(
																						"option",
																						{ value: ae - t, children: ae - t },
																						t
																					);
																				}
																			),
																		],
																	}),
																],
															}),
														}),
														Object(n.jsx)($.a, {
															span: 12,
															children: Object(n.jsxs)("div", {
																style: {
																	display: "flex",
																	justifyContent: "center",
																},
																children: [
																	Object(n.jsx)("p", {
																		style: {
																			display: "flex",
																			justifyContent: "center",
																			paddingRight: "20px",
																		},
																		children: Object(n.jsx)("b", {
																			children: J("filters.releaseYear"),
																		}),
																	}),
																	Object(n.jsx)(ue.a, {
																		className: "input-range",
																		maxValue: 2020,
																		minValue: 1980,
																		value: x,
																		onChange: function (e) {
																			return M(e);
																		},
																	}),
																],
															}),
														}),
													],
												}),
												Object(n.jsx)(Z.a, { children: "Genres" }),
												Object(n.jsx)("div", {
													style: { textAlign: "center" },
													children: Q.map(function (e) {
														return Object(n.jsx)(
															H.a,
															{
																shape: "round",
																size: "small",
																onClick: T,
																value: e.id,
																style: {
																	borderColor: "#19ba90",
																	textAlign: "center",
																	fontSize: "0.9em",
																	margin: "1px",
																},
																children: e.name,
															},
															e.name
														);
													}),
												}),
												Object(n.jsx)("br", {}),
												Object(n.jsx)("div", {
													style: {
														display: "flex",
														justifyContent: "flex-end",
													},
													children: Object(n.jsx)(H.a, {
														onClick: z,
														children: J("filters.clearFilters"),
													}),
												}),
											],
										}),
									Object(n.jsxs)("div", {
										style: { width: "85%", margin: "1rem auto" },
										children: [
											Object(n.jsxs)(i.a.Fragment, {
												children: [
													Object(n.jsxs)(pe, {
														level: 2,
														children: [
															Object(n.jsx)(ne, {
																type: "icon-movie3",
																style: {
																	fontSize: "35px",
																	paddingRight: "10px",
																},
															}),
															J(A ? "landing.searchRes" : "landing.latest"),
														],
													}),
													Object(n.jsx)("hr", {}),
													Object(n.jsx)("br", {}),
												],
											}),
											Object(n.jsx)(V.a, {
												gutter: [16, 16],
												children:
													void 0 !== c && c[0]
														? c &&
														  c.map(function (e, t) {
																return Object(n.jsx)(
																	i.a.Fragment,
																	{
																		children:
																			e &&
																			e.poster_path &&
																			e.release_date &&
																			e.vote_count > 2300 &&
																			null !== e.imdb_id &&
																			null !== e.backdrop_path &&
																			null !== e.overview &&
																			Object(n.jsx)(te, {
																				movie: !0,
																				image: e.poster_path
																					? ""
																							.concat(k)
																							.concat(F)
																							.concat(e.poster_path)
																					: J("landing.notAvail"),
																				movieId: e.id,
																				movieName: e.title,
																				date: e.release_date,
																				vote: e.vote_average
																					? e.vote_average
																					: "N/A",
																				movieGenre:
																					e.genre_ids &&
																					e.genre_ids.length &&
																					e.genre_ids
																						.map(function (e) {
																							return Object(n.jsx)(
																								"span",
																								{
																									children: Q.map(function (t) {
																										return (
																											e === t.id &&
																											Object(n.jsx)(
																												oe.b,
																												{
																													to: "/landing/genre/"
																														.concat(t.name, "/")
																														.concat(t.id),
																													children: Object(
																														n.jsx
																													)(
																														H.a,
																														{
																															shape: "round",
																															size: "small",
																															style: {
																																borderColor:
																																	"#19ba90",
																																textAlign:
																																	"center",
																																fontSize:
																																	"0.9em",
																																margin: "1px",
																															},
																															children: t.name,
																														},
																														t.name
																													),
																												},
																												t.name
																											)
																										);
																									}),
																								},
																								e
																							);
																						})
																						.slice(0, 3),
																			}),
																	},
																	e.id
																);
														  })
														: !c[0] &&
														  !d &&
														  Object(n.jsx)("div", {
																style: {
																	width: "100%",
																	fontSize: "1.5rem",
																	height: "200px",
																	display: "flex",
																	flexDirection: "column",
																	justifyContent: "center",
																	alignItems: "center",
																},
																children: J("landing.noresults"),
														  }),
											}),
											d && Object(n.jsx)(L, {}),
											o < l &&
												!d &&
												Object(n.jsx)("div", {
													style: { display: "flex", justifyContent: "center" },
													children: Object(n.jsx)("div", {
														ref: X,
														className: "loadMore",
														onClick: function () {
															var e = ""
																	.concat(S, "discover/movie?api_key=")
																	.concat(N, "&language=")
																	.concat(C, "&vote_count.gte=2500&sort_by=")
																	.concat(b, "&primary_release_year=")
																	.concat(m, "&vote_average.gte=")
																	.concat(g.min, "&vote_average.lte=")
																	.concat(g.max, "&primary_release_date.gte=")
																	.concat(
																		x.min,
																		"-01-01&primary_release_date.lte="
																	)
																	.concat(
																		x.max === he.getFullYear()
																			? K(he)
																			: x.max + "-12-31",
																		"&with_genres="
																	)
																	.concat(f, "&page=")
																	.concat(o + 1),
																t = ""
																	.concat(S, "search/movie?api_key=")
																	.concat(N, "&language=")
																	.concat(C, "&query=")
																	.concat(A, "&page=")
																	.concat(o + 1);
															y(A ? t : e);
														},
														children: J("landing.loadmore"),
													}),
												}),
										],
									}),
								],
						  });
				},
				xe = Y.a.Title,
				fe = function () {
					var e = Object(m.g)(),
						t = e.genreId,
						a = e.genreName,
						s = e.movieId,
						c = (function (e) {
							var t = Object(r.useState)({ Movies: [] }),
								a = Object(W.a)(t, 2),
								n = a[0],
								i = a[1],
								s = Object(r.useState)(!0),
								c = Object(W.a)(s, 2),
								o = c[0],
								l = c[1],
								d = Object(r.useState)(!1),
								u = Object(W.a)(d, 2),
								b = u[0],
								g = u[1],
								x = Object(m.f)(),
								f = (function () {
									var e = Object(h.a)(
										p.a.mark(function e(t) {
											var a, n, r;
											return p.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	g(!1),
																	l(!0),
																	(a = t.search("page")),
																	(e.prev = 3),
																	(e.next = 6),
																	fetch(t)
																);
															case 6:
																return (e.next = 8), e.sent.json();
															case 8:
																0 === (n = e.sent).results.length && x.goBack(),
																	(r = Math.floor(20 * Math.random())),
																	i(function (e) {
																		return Object(j.a)(
																			Object(j.a)({}, e),
																			{},
																			{
																				Movies:
																					-1 !== a
																						? [].concat(
																								Object(me.a)(e.Movies),
																								Object(me.a)(n.results)
																						  )
																						: Object(me.a)(n.results),
																				MainMovieImage:
																					e.MainMovieImage || n.results[r],
																				CurrentPage: n.page,
																				totalPages: n.total_pages,
																			}
																		);
																	}),
																	(e.next = 18);
																break;
															case 14:
																(e.prev = 14),
																	(e.t0 = e.catch(3)),
																	g(!0),
																	console.error(e.t0);
															case 18:
																l(!1);
															case 19:
															case "end":
																return e.stop();
														}
												},
												e,
												null,
												[[3, 14]]
											);
										})
									);
									return function (t) {
										return e.apply(this, arguments);
									};
								})();
							return (
								Object(r.useEffect)(
									function () {
										var t = localStorage.getItem("language");
										f(
											""
												.concat(S, "discover/movie?api_key=")
												.concat(N, "&language=")
												.concat(t, "&with_genres=")
												.concat(e)
										);
									},
									[e]
								),
								[{ state: n, loading: o, error: b }, f]
							);
						})(t),
						o = Object(W.a)(c, 2),
						l = o[0],
						d = l.state,
						u = d.Movies,
						b = d.MainMovieImage,
						g = d.CurrentPage,
						x = d.totalPages,
						f = l.loading,
						O = l.error,
						v = o[1],
						y = Object(m.f)(),
						w = function () {
							y.push("/movie/".concat(s));
						},
						_ = Object(r.useState)(""),
						M = Object(W.a)(_, 2),
						T = M[0],
						z = M[1],
						q = Object(r.useRef)(null),
						R = Object(E.a)().t;
					Object(r.useEffect)(function () {
						window.addEventListener("scroll", D);
					}, []);
					var A = [
							{ id: 28, name: R("genre.Action") },
							{ id: 12, name: R("genre.Adventure") },
							{ id: 16, name: R("genre.Animation") },
							{ id: 35, name: R("genre.Comedy") },
							{ id: 80, name: R("genre.Crime") },
							{ id: 99, name: R("genre.Documentary") },
							{ id: 18, name: R("genre.Drama") },
							{ id: 10751, name: R("genre.Family") },
							{ id: 14, name: R("genre.Fantasy") },
							{ id: 36, name: R("genre.History") },
							{ id: 27, name: R("genre.Horror") },
							{ id: 10402, name: R("genre.Music") },
							{ id: 9648, name: R("genre.Mystery") },
							{ id: 10749, name: R("genre.Romance") },
							{ id: 878, name: R("genre.Sci-Fi") },
							{ id: 10770, name: R("genre.TV-Movie") },
							{ id: 53, name: R("genre.Thriller") },
							{ id: 10752, name: R("genre.War") },
							{ id: 37, name: R("genre.Western") },
						],
						D = function (e) {
							var t =
									"innerHeight" in window
										? window.innerHeight
										: document.documentElement.offsetHeight,
								a = document.body,
								n = document.documentElement,
								r = Math.max(a.scrollHeight, a.offsetHeight, n.clientHeight);
							t + window.pageYOffset >= r - 1 && q.current && q.current.click();
						},
						P = Object(le.a)({
							scriptUrl: "//at.alicdn.com/t/font_1804216_tqdqw1tcevm.js",
						});
					return O
						? Object(n.jsx)("div", { children: "Something went wrong..." })
						: Object(n.jsxs)("div", {
								style: { width: "100%", margin: "0" },
								children: [
									f
										? Object(n.jsx)("div", { children: Object(n.jsx)(L, {}) })
										: null !== b &&
										  Object(n.jsx)(G, {
												genre: !0,
												image: b.backdrop_path
													? "".concat(k).concat(I).concat(b.backdrop_path)
													: "https://res.cloudinary.com/dkyqbngya/image/upload/v1586787757/detykqycj7ejezsjmxln.png",
												genreName: a,
										  }),
									Object(n.jsx)(ce, {
										callback: function (e) {
											var a = e
												? ""
														.concat(S, "search/movie?api_key=")
														.concat(N, "&language=")
														.concat(C, "&with_genres=")
														.concat(t, "&query=") + e
												: ""
														.concat(S, "discover/movie?api_key=")
														.concat(N, "&language=")
														.concat(C, "&with_genres=")
														.concat(t);
											z(e), v(a);
										},
									}),
									Object(n.jsx)("div", {
										style: { display: "flex", justifyContent: "center" },
										children: Object(n.jsx)(H.a, {
											type: "primary",
											shape: "round",
											style: { fontSize: "1rem" },
											children: Object(n.jsx)("a", {
												href: "/landing",
												children: R("genre.landing"),
											}),
										}),
									}),
									Object(n.jsxs)("div", {
										style: { width: "85%", margin: "1rem auto" },
										children: [
											f
												? null
												: Object(n.jsxs)(i.a.Fragment, {
														children: [
															Object(n.jsxs)(xe, {
																level: 2,
																children: [
																	Object(n.jsx)(P, {
																		type: "icon-movie3",
																		style: {
																			fontSize: "35px",
																			paddingRight: "10px",
																		},
																	}),
																	T ? R("landing.searchRes") : a,
																],
															}),
															Object(n.jsx)("hr", {}),
															Object(n.jsx)("br", {}),
														],
												  }),
											Object(n.jsx)(V.a, {
												gutter: [16, 16],
												children: u[0]
													? u &&
													  u.map(function (e, t) {
															return Object(n.jsx)(
																i.a.Fragment,
																{
																	children:
																		e &&
																		e.poster_path &&
																		e.release_date &&
																		e.vote_count > 2300 &&
																		null !== e.imdb_id &&
																		null !== e.backdrop_path &&
																		null !== e.overview &&
																		Object(n.jsx)(te, {
																			movie: !0,
																			onClick: w,
																			image: e.poster_path
																				? ""
																						.concat(k)
																						.concat(F)
																						.concat(e.poster_path)
																				: R("landing.notAvail"),
																			movieId: e.id,
																			movieName: e.title,
																			date: e.release_date,
																			vote: e.vote_average
																				? e.vote_average
																				: "N/A",
																			movieGenre:
																				e.genre_ids &&
																				e.genre_ids.length &&
																				e.genre_ids
																					.map(function (e) {
																						return Object(n.jsx)(
																							"span",
																							{
																								children: A.map(function (t) {
																									return (
																										e === t.id &&
																										Object(n.jsx)(
																											oe.b,
																											{
																												to: "/landing/genre/"
																													.concat(t.name, "/")
																													.concat(t.id),
																												children: Object(n.jsx)(
																													H.a,
																													{
																														shape: "round",
																														size: "small",
																														style: {
																															borderColor:
																																"#19ba90",
																															textAlign:
																																"center",
																															fontSize: "0.9em",
																															margin: "1px",
																														},
																														children: t.name,
																													},
																													t.name
																												),
																											},
																											t.name
																										)
																									);
																								}),
																							},
																							e
																						);
																					})
																					.slice(0, 3),
																		}),
																},
																e.id
															);
													  })
													: !u[0] &&
													  !f &&
													  Object(n.jsx)("div", {
															style: {
																width: "100%",
																fontSize: "1.5rem",
																height: "200px",
																display: "flex",
																flexDirection: "column",
																justifyContent: "center",
																alignItems: "center",
															},
															children: R("landing.noresults"),
													  }),
											}),
											f && Object(n.jsx)(L, {}),
											g < x &&
												!f &&
												Object(n.jsx)("div", {
													style: { display: "flex", justifyContent: "center" },
													children: Object(n.jsx)("div", {
														ref: q,
														className: "loadMore",
														onClick: function () {
															var e = ""
																	.concat(S, "discover/movie?api_key=")
																	.concat(N, "&language=")
																	.concat(C, "&with_genres=")
																	.concat(t, "&page=")
																	.concat(g + 1),
																a = ""
																	.concat(S, "search/movie?api_key=")
																	.concat(N, "&language=")
																	.concat(C, "&with_genres=")
																	.concat(t, "&query=")
																	.concat(T, "&page=")
																	.concat(g + 1);
															v(T ? a : e);
														},
														children: R("landing.loadmore"),
													}),
												}),
										],
									}),
								],
						  });
				},
				Oe = a(95),
				ve = a(33),
				ye = a(606),
				we = a(608),
				_e = a(604),
				Se = a(615),
				Ne = a(616),
				Ce = Y.a.Title;
			var ke = Object(m.h)(function (e) {
					var t = Object(E.a)().t,
						a = Object(z.b)(),
						i = !!localStorage.getItem("rememberMe"),
						s = Object(r.useState)(""),
						c = Object(W.a)(s, 2),
						o = c[0],
						l = c[1],
						d = Object(r.useState)(i),
						u = Object(W.a)(d, 2),
						m = u[0],
						j = u[1],
						b = function () {
							j(!m);
						},
						p = localStorage.getItem("rememberMe")
							? localStorage.getItem("rememberMe")
							: "";
					return Object(n.jsx)(Oe.a, {
						initialValues: { username: p, password: "" },
						validationSchema: ve.a().shape({
							username: ve
								.c()
								.min(2, t("login.usernameErr"))
								.required(t("login.usernameErr2")),
							password: ve
								.c()
								.min(4, t("login.passwordErr"))
								.required(t("login.passwordErr2")),
						}),
						onSubmit: function (n, r) {
							var i = r.setSubmitting;
							setTimeout(function () {
								var r = { username: n.username, password: n.password };
								a(
									(function (e) {
										var t = x.a
											.post("".concat(_, "/login"), e)
											.then(function (e) {
												return e.data;
											});
										return { type: f, payload: t };
									})(r)
								)
									.then(function (a) {
										a.payload.loginSuccess
											? (window.localStorage.setItem(
													"userId",
													a.payload.userId
											  ),
											  !0 === m
													? window.localStorage.setItem(
															"rememberMe",
															n.username
													  )
													: localStorage.removeItem("rememberMe"),
											  e.history.push("/landing"))
											: l(t("login.formErr"));
									})
									.catch(function (e) {
										l(t("login.formErr")),
											setTimeout(function () {
												l("");
											}, 3e3);
									}),
									i(!1);
							}, 500);
						},
						children: function (e) {
							var a = e.values,
								r = e.touched,
								i = e.errors,
								s = e.isSubmitting,
								c = e.handleChange,
								l = e.handleBlur,
								d = e.handleSubmit;
							return Object(n.jsx)("div", {
								className: "loginbg",
								children: Object(n.jsxs)("div", {
									className: "login",
									children: [
										Object(n.jsx)(Ce, {
											level: 3,
											style: { textAlign: "center" },
											children: t("login.login"),
										}),
										Object(n.jsxs)("form", {
											onSubmit: d,
											children: [
												Object(n.jsxs)(ye.a.Item, {
													required: !0,
													children: [
														Object(n.jsx)(we.a, {
															id: "username",
															prefix: Object(n.jsx)(Se.a, {
																style: { color: "rgba(0,0,0,.25)" },
															}),
															placeholder: t("login.username"),
															type: "text",
															value: a.username,
															onChange: c,
															onBlur: l,
															className:
																i.username && r.username
																	? "text-input error"
																	: "text-input",
														}),
														i.username &&
															r.username &&
															Object(n.jsx)("div", {
																className: "input-feedback",
																children: i.username,
															}),
													],
												}),
												Object(n.jsxs)(ye.a.Item, {
													required: !0,
													children: [
														Object(n.jsx)(we.a, {
															id: "password",
															prefix: Object(n.jsx)(Ne.a, {
																style: { color: "rgba(0,0,0,.25)" },
															}),
															placeholder: t("login.password"),
															type: "password",
															autoComplete: "off",
															value: a.password,
															onChange: c,
															onBlur: l,
															className:
																i.password && r.password
																	? "text-input error"
																	: "text-input",
														}),
														i.password &&
															r.password &&
															Object(n.jsx)("div", {
																className: "input-feedback",
																children: i.password,
															}),
													],
												}),
												o &&
													Object(n.jsx)("label", {
														children: Object(n.jsx)("p", {
															style: {
																color: "#ff0000bf",
																textAlign: "center",
																fontSize: "0.8rem",
																border: "1px solid",
																padding: "0.5rem",
																borderRadius: "10px",
															},
															children: o,
														}),
													}),
												Object(n.jsxs)(ye.a.Item, {
													children: [
														Object(n.jsx)(_e.a, {
															id: "rememberMe",
															onChange: b,
															checked: m,
															children: t("login.remember"),
														}),
														Object(n.jsx)("a", {
															className: "login-form-forgot",
															href: "/forgot",
															style: { float: "right" },
															children: t("login.forgot"),
														}),
														Object(n.jsx)("div", {
															children: Object(n.jsx)(H.a, {
																type: "primary",
																htmlType: "submit",
																className: "login-form-button",
																style: { minWidth: "100%" },
																disabled: s,
																onSubmit: d,
																children: t("login.login"),
															}),
														}),
														"Or ",
														Object(n.jsx)("a", {
															href: "/register",
															children: t("login.registernow"),
														}),
													],
												}),
												Object(n.jsx)("h3", { children: t("login.connect") }),
												Object(n.jsx)("div", {
													className: "container",
													style: { textAlign: "center" },
													children: Object(n.jsx)("label", {
														children: Object(n.jsxs)("p", {
															style: {
																color: "#ff0000bf",
																backgroundColor: "white",
																textAlign: "center",
																fontSize: "0.85rem",
																border: "1px solid",
																padding: "0.5rem",
																borderRadius: "10px",
															},
															children: [
																"Welcome to the Live Demo.",
																Object(n.jsx)("br", {}),
																"You can sign up now or use the following credentials:",
																Object(n.jsx)("br", {}),
																Object(n.jsx)("b", { children: "Username:" }),
																" test ",
																Object(n.jsx)("br", {}),
																Object(n.jsx)("b", { children: "Password:" }),
																" test",
															],
														}),
													}),
												}),
											],
										}),
									],
								}),
							});
						},
					});
				}),
				Ie = a(302),
				Fe = {
					labelCol: { xs: { span: 24 }, sm: { span: 8 } },
					wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
				},
				Me = {
					wrapperCol: {
						xs: { span: 24, offset: 0 },
						sm: { span: 16, offset: 8 },
					},
				};
			var Te = function (e) {
					var t = Object(E.a)().t,
						a = Object(r.useState)(""),
						s = Object(W.a)(a, 2),
						c = s[0],
						o = s[1],
						l = Object(r.useState)(!1),
						d = Object(W.a)(l, 2),
						u = d[0],
						m = d[1],
						b = i.a.useState(""),
						p = Object(W.a)(b, 2),
						h = p[0],
						g = p[1],
						f = i.a.useRef(),
						v = ["jpg", "jpeg", "png", "gif"],
						y = function (e) {
							e.preventDefault(), g(e.target.value);
							var a = e.target.files[0],
								n = "https://api.cloudinary.com/v1_1/".concat(
									"dkyqbngya",
									"/image/upload"
								);
							if (a && 0 !== a.length && a) {
								var r = a.name.replace(/.*\./, "").toLowerCase();
								if (v.indexOf(r) < 0)
									return (
										Ie.b.error(
											"".concat(a.type).concat(t("register.imgFormat"))
										),
										(f.current.value = ""),
										g(""),
										void o("")
									);
								if (a.size > 15e4)
									return (
										Ie.b.error(
											"".concat(a.name).concat(t("register.imgTooLarge"))
										),
										(f.current.value = ""),
										g(""),
										void o("")
									);
								var i = new FormData();
								i.append("file", a),
									i.append("upload_preset", "f7r0dz2t"),
									m(!0);
								x.a
									.post(n, i, {
										headers: { "X-Requested-With": "XMLHttpRequest" },
									})
									.then(function (e) {
										m(!1);
										var t = e.data.secure_url.split("/");
										t.splice(-3, 0, "w_125,c_scale");
										var a = new Image();
										(a.src = t.join("/")), o(a.src);
									})
									.catch(function (e) {
										if (e)
											switch (e.response.status) {
												case 400:
													Ie.b.error(t("register.imgInvalid"));
													break;
												case 404:
													Ie.b.error(t("register.imgNotFound"));
													break;
												case 500:
													Ie.b.error(t("register.imgError"));
											}
									});
							}
						},
						w = Object(z.b)();
					return Object(n.jsx)(Oe.a, {
						initialValues: {
							email: "",
							firstName: "",
							lastName: "",
							username: "",
							password: "",
							confirmPassword: "",
							image: "",
						},
						validationSchema: ve.a().shape({
							username: ve
								.c()
								.required(t("register.usernameErr"))
								.matches(/^[A-Za-z0-9_]{2,20}$/, t("register.usernameRules"))
								.min(2, t("register.usernameMin"))
								.max(20, t("register.usernameMax")),
							firstName: ve
								.c()
								.required(t("register.firstNameErr"))
								.matches(/^[A-Z]+$/i, t("register.firstNameAlpha"))
								.min(2, t("register.firstNameMin"))
								.max(20, t("register.firstNameMax")),
							lastName: ve
								.c()
								.required(t("register.lastNameErr"))
								.matches(/^[A-Z]+$/i, t("register.lastNameAlpha"))
								.min(2, t("register.lastNameMin"))
								.max(20, t("register.lastNameMax")),
							email: ve
								.c()
								.email(t("register.emailInvalid"))
								.required(t("register.emailErr")),
							password: ve
								.c()
								.min(4, t("register.passwordMin"))
								.max(15, t("register.passwordMax"))
								.required(t("register.passwordErr")),
							confirmPassword: ve
								.c()
								.oneOf([ve.b("password"), null], t("register.passwordMatch"))
								.required(t("register.cpasswordErr")),
						}),
						onSubmit: function (a, n) {
							var r = n.setSubmitting;
							setTimeout(function () {
								var n = {
									email: a.email,
									password: a.password,
									username: a.username,
									firstName: a.firstName,
									lastName: a.lastName,
									image: c,
								};
								c && "" !== c
									? w(
											(function (e) {
												var t = x.a
													.post("".concat(_, "/register"), e)
													.then(function (e) {
														return e.data;
													});
												return { type: O, payload: t };
											})(n)
									  ).then(function (a) {
											a.payload.success
												? (B.store.addNotification({
														message: t("register.checkEmail"),
														insert: "top",
														type: "success",
														container: "top-right",
														animationIn: ["animated", "fadeIn"],
														animationOut: ["animated", "fadeOut"],
														dismiss: { duration: 5e3, onScreen: !0 },
												  }),
												  e.history.push("/login"))
												: alert(a.payload.err);
									  })
									: Ie.b.error(t("register.imageErr")),
									r(!1);
							}, 500);
						},
						children: function (e) {
							var a = e.values,
								r = e.touched,
								i = e.errors,
								s = e.isSubmitting,
								o = e.handleChange,
								l = e.handleBlur,
								d = e.handleSubmit;
							return Object(n.jsx)("div", {
								className: "registerbg",
								children: Object(n.jsxs)("div", {
									className: "register",
									children: [
										Object(n.jsx)("h1", {
											style: { textAlign: "center" },
											children: t("register.signup"),
										}),
										Object(n.jsxs)(
											ye.a,
											Object(j.a)(
												Object(j.a)({ style: { minWidth: "375px" } }, Fe),
												{},
												{
													onSubmit: d,
													children: [
														Object(n.jsxs)(ye.a.Item, {
															required: !0,
															label: t("register.username"),
															children: [
																Object(n.jsx)(we.a, {
																	id: "username",
																	placeholder: t("register.usernameForm"),
																	type: "text",
																	autoComplete: "username",
																	value: a.username,
																	onChange: o,
																	onBlur: l,
																	className:
																		i.username && r.username
																			? "text-input error"
																			: "text-input",
																}),
																i.username &&
																	r.username &&
																	Object(n.jsx)("div", {
																		className: "input-feedback",
																		children: i.username,
																	}),
															],
														}),
														Object(n.jsxs)(ye.a.Item, {
															required: !0,
															label: t("register.firstName"),
															children: [
																Object(n.jsx)(we.a, {
																	id: "firstName",
																	placeholder: t("register.firstNameForm"),
																	type: "text",
																	value: a.firstName,
																	onChange: o,
																	onBlur: l,
																	className:
																		i.firstName && r.firstName
																			? "text-input error"
																			: "text-input",
																}),
																i.firstName &&
																	r.firstName &&
																	Object(n.jsx)("div", {
																		className: "input-feedback",
																		children: i.firstName,
																	}),
															],
														}),
														Object(n.jsxs)(ye.a.Item, {
															required: !0,
															label: t("register.lastName"),
															children: [
																Object(n.jsx)(we.a, {
																	id: "lastName",
																	placeholder: t("register.lastNameForm"),
																	type: "text",
																	value: a.lastName,
																	onChange: o,
																	onBlur: l,
																	className:
																		i.lastName && r.lastName
																			? "text-input error"
																			: "text-input",
																}),
																i.lastName &&
																	r.lastName &&
																	Object(n.jsx)("div", {
																		className: "input-feedback",
																		children: i.lastName,
																	}),
															],
														}),
														Object(n.jsxs)(ye.a.Item, {
															required: !0,
															label: t("register.email"),
															children: [
																Object(n.jsx)(we.a, {
																	id: "email",
																	placeholder: t("register.emailForm"),
																	type: "email",
																	autoComplete: "email",
																	value: a.email,
																	onChange: o,
																	onBlur: l,
																	className:
																		i.email && r.email
																			? "text-input error"
																			: "text-input",
																}),
																i.email &&
																	r.email &&
																	Object(n.jsx)("div", {
																		className: "input-feedback",
																		children: i.email,
																	}),
															],
														}),
														Object(n.jsxs)(ye.a.Item, {
															required: !0,
															label: t("register.password"),
															hasFeedback: !0,
															validateStatus:
																i.password && r.password ? "error" : "success",
															children: [
																Object(n.jsx)(we.a, {
																	id: "password",
																	placeholder: t("register.passwordForm"),
																	type: "password",
																	autoComplete: "new-password",
																	value: a.password,
																	onChange: o,
																	onBlur: l,
																	className:
																		i.password && r.password
																			? "text-input error"
																			: "text-input",
																}),
																i.password &&
																	r.password &&
																	Object(n.jsx)("div", {
																		className: "input-feedback",
																		children: i.password,
																	}),
															],
														}),
														Object(n.jsxs)(ye.a.Item, {
															required: !0,
															label: t("register.cpassword"),
															hasFeedback: !0,
															validateStatus:
																i.cpassword && r.cpassword
																	? "error"
																	: "success",
															children: [
																Object(n.jsx)(we.a, {
																	id: "confirmPassword",
																	placeholder: t("register.cpasswordForm"),
																	type: "password",
																	autoComplete: "new-password",
																	value: a.confirmPassword,
																	onChange: o,
																	onBlur: l,
																	className:
																		i.confirmPassword && r.confirmPassword
																			? "text-input error"
																			: "text-input",
																}),
																i.confirmPassword &&
																	r.confirmPassword &&
																	Object(n.jsx)("div", {
																		className: "input-feedback",
																		children: i.confirmPassword,
																	}),
															],
														}),
														Object(n.jsxs)(ye.a.Item, {
															required: !0,
															label: t("register.image"),
															children: [
																Object(n.jsx)(we.a, {
																	id: "image",
																	type: "file",
																	name: "image",
																	accept: "image/*",
																	onChange: y,
																	onBlur: l,
																	value: h,
																	ref: f,
																}),
																Object(n.jsx)("div", {
																	name: "image",
																	className: "imagePreview",
																	children: u
																		? Object(n.jsx)(L, {})
																		: Object(n.jsx)("img", { src: c, alt: "" }),
																}),
															],
														}),
														Object(n.jsx)(
															ye.a.Item,
															Object(j.a)(
																Object(j.a)({}, Me),
																{},
																{
																	children: Object(n.jsx)(H.a, {
																		onClick: d,
																		type: "primary",
																		disabled: s,
																		children: t("register.submit"),
																	}),
																}
															)
														),
													],
												}
											)
										),
									],
								}),
							});
						},
					});
				},
				ze = a(607),
				qe = Object(le.a)({
					scriptUrl: "//at.alicdn.com/t/font_1804216_05evm2uwptc9.js",
				});
			var Ee = function (e) {
					var t = Object(E.a)().t,
						a = Object(z.c)(function (e) {
							return e.user;
						});
					return a.userData && !a.userData.isAuth
						? ""
						: Object(n.jsx)(ze.a, {
								mode: e.mode,
								children: Object(n.jsx)(
									ze.a.Item,
									{
										children: Object(n.jsxs)("a", {
											href: "/favorite",
											children: [
												Object(n.jsx)(qe, {
													type: "icon-popcorn",
													style: { fontSize: "25px" },
												}),
												t("navbar.favorites"),
											],
										}),
									},
									""
								),
						  });
				},
				Re = a(617),
				Ae = a(618),
				De = a(621),
				Pe = a(588),
				Le = a(620),
				Be = a(591),
				Ue = a(602),
				We = Object(Pe.a)(function (e) {
					return {
						formControl: { marginLeft: 10, alignItems: "center" },
						selectEmpty: {
							"& .MuiSelect-root": { background: "white" },
							marginTop: e.spacing(2),
							marginLeft: 10,
						},
					};
				});
			var Ye = Object(m.h)(function (e) {
					var t = Object(E.a)(),
						a = t.t,
						s = t.i18n,
						c = s.language,
						o = We();
					function l(e) {
						var t;
						(t = e.target.value),
							s.changeLanguage(t),
							localStorage.setItem("language", e.target.value);
					}
					var d = Object(z.c)(function (e) {
							return e.user;
						}),
						u = Object(r.useState)(""),
						m = Object(W.a)(u, 2),
						j = m[0],
						b = m[1],
						p = Object(r.useState)(!1),
						h = Object(W.a)(p, 2),
						g = h[0],
						f = h[1];
					Object(r.useEffect)(
						function () {
							O(), g || f(!0);
						},
						[e, g]
					);
					var O = function () {
							x.a.get("/api/users/auth").then(function (e) {
								e.data ? b(e.data.username) : alert("Failed to get Username");
							});
						},
						v = Object(le.a)({
							scriptUrl: "//at.alicdn.com/t/font_1804216_5e8qc34kmnl.js",
						});
					return d.userData && !d.userData.isAuth
						? Object(n.jsxs)(ze.a, {
								mode: e.mode,
								children: [
									Object(n.jsx)(
										ze.a.Item,
										{
											children: Object(n.jsxs)("a", {
												href: "/login",
												children: [
													a("navbar.login"),
													Object(n.jsx)(Re.a, { style: { padding: "10px" } }),
												],
											}),
										},
										"mail"
									),
									Object(n.jsx)(
										ze.a.Item,
										{
											children: Object(n.jsxs)("a", {
												href: "/register",
												children: [
													a("navbar.register"),
													Object(n.jsx)(Ae.a, { style: { padding: "10px" } }),
												],
											}),
										},
										"app"
									),
									Object(n.jsx)(i.a.Fragment, {
										children: Object(n.jsx)(Be.a, {
											className: o.formControl,
											children: Object(n.jsxs)(Ue.a, {
												value: c,
												onChange: l,
												displayEmpty: !0,
												autoWidth: !0,
												disableUnderline: !0,
												IconComponent: function () {
													return "";
												},
												className: o.selectEmpty,
												inputProps: { "aria-label": "Without label" },
												children: [
													Object(n.jsx)(Le.a, {
														value: "en-US",
														children: Object(n.jsx)("img", {
															src: "https://res.cloudinary.com/dkyqbngya/image/upload/c_scale,w_25/v1585483470/united-states-of-america-flag-button-round-xs_xgcefz.png",
															alt: "US Flag",
														}),
													}),
													Object(n.jsx)(Le.a, {
														value: "fr-FR",
														children: Object(n.jsx)("img", {
															src: "https://res.cloudinary.com/dkyqbngya/image/upload/c_scale,w_25/v1585483466/france-flag-button-round-icon-64_uqllrc.png",
															alt: "French Flag",
														}),
													}),
												],
											}),
										}),
									}),
								],
						  })
						: Object(n.jsxs)(ze.a, {
								mode: e.mode,
								children: [
									Object(n.jsx)(
										ze.a.Item,
										{
											children: Object(n.jsxs)("a", {
												href: "/profile",
												children: [
													a("navbar.welcome"),
													"\xa0\xa0",
													Object(n.jsx)("span", {
														className: "username",
														children: j,
													}),
												],
											}),
										},
										"profile"
									),
									Object(n.jsx)(
										ze.a.Item,
										{
											children: Object(n.jsxs)("a", {
												href: "/users",
												children: [
													Object(n.jsx)(v, {
														type: "icon-group",
														style: { fontSize: "20px" },
													}),
													a("navbar.users"),
												],
											}),
										},
										"users"
									),
									Object(n.jsx)(
										ze.a.Item,
										{
											children: Object(n.jsxs)("a", {
												onClick: function () {
													x.a.get("".concat(_, "/logout")).then(function (t) {
														200 === t.status
															? e.history.push("/login")
															: alert("Log Out Failed");
													});
												},
												children: [Object(n.jsx)(De.a, {}), a("navbar.logout")],
											}),
										},
										"logout"
									),
									Object(n.jsx)(i.a.Fragment, {
										children: Object(n.jsx)(Be.a, {
											className: o.formControl,
											children: Object(n.jsxs)(Ue.a, {
												value: c,
												onChange: l,
												displayEmpty: !0,
												autoWidth: !0,
												disableUnderline: !0,
												IconComponent: function () {
													return "";
												},
												className: o.selectEmpty,
												inputProps: { "aria-label": "Without label" },
												children: [
													Object(n.jsx)(Le.a, {
														value: "en-US",
														children: Object(n.jsx)("img", {
															src: "https://res.cloudinary.com/dkyqbngya/image/upload/c_scale,w_25/v1585483470/united-states-of-america-flag-button-round-xs_xgcefz.png",
															alt: "US Flag",
														}),
													}),
													Object(n.jsx)(Le.a, {
														value: "fr-FR",
														children: Object(n.jsx)("img", {
															src: "https://res.cloudinary.com/dkyqbngya/image/upload/c_scale,w_25/v1585483466/france-flag-button-round-icon-64_uqllrc.png",
															alt: "French Flag",
														}),
													}),
												],
											}),
										}),
									}),
								],
						  });
				}),
				He = a(605),
				Ve = a(622);
			a(547);
			var $e = function () {
				var e = Object(r.useState)(!1),
					t = Object(W.a)(e, 2),
					a = t[0],
					i = t[1],
					s = Object(z.c)(function (e) {
						return e.user;
					});
				return Object(n.jsxs)("nav", {
					className: "menu",
					style: { position: "fixed", zIndex: 1, width: "100%" },
					children: [
						Object(n.jsx)("div", {
							className: "menu__logo",
							children:
								s.userData && !s.userData.isAuth
									? Object(n.jsx)("a", {
											href: "/",
											children: Object(n.jsx)("img", {
												src: "./logo.png",
												alt: "Logo",
												style: { width: "100%", marginTop: "-5px" },
											}),
									  })
									: Object(n.jsx)("a", {
											href: "/landing",
											children: Object(n.jsx)("img", {
												src: "./logo.png",
												alt: "Logo",
												style: { width: "100%", marginTop: "-5px" },
											}),
									  }),
						}),
						Object(n.jsxs)("div", {
							className: "menu__container",
							children: [
								Object(n.jsx)("div", {
									className: "menu_left",
									children: Object(n.jsx)(Ee, { mode: "horizontal" }),
								}),
								Object(n.jsx)("div", {
									className: "menu_right",
									children: Object(n.jsx)(Ye, { mode: "horizontal" }),
								}),
								Object(n.jsx)(H.a, {
									className: "menu__mobile-button",
									type: "primary",
									onClick: function () {
										i(!0);
									},
									children: Object(n.jsx)(Ve.a, {}),
								}),
								Object(n.jsxs)(He.a, {
									title: "Menu",
									placement: "right",
									className: "menu_drawer",
									closable: !1,
									onClose: function () {
										i(!1);
									},
									visible: a,
									children: [
										Object(n.jsx)(Ee, { mode: "inline" }),
										Object(n.jsx)(Ye, { mode: "inline" }),
									],
								}),
							],
						}),
					],
				});
			};
			var Ze = function () {
					return Object(n.jsx)("div", {
						style: {
							height: "80px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							fontSize: "1rem",
						},
						children: Object(n.jsx)("p", { children: "" }),
					});
				},
				Xe = Object(Pe.a)(function (e) {
					return {
						playerWrapper: { position: "relative", paddingTop: "56.25%" },
						reactPlayer: { position: "absolute", top: "0", left: "0" },
						buttonChooseSource: { color: "white", borderColor: "white" },
						buttonActors: { borderRadius: "10px !important" },
						loadingSources: { marginRight: "1em", color: "white" },
						movieContainer: { paddingTop: 50, paddingBottom: 50 },
						backdrop: {
							position: "absolute",
							height: "100%",
							width: "100%",
							zIndex: -1,
							"&:after": {
								position: "absolute",
								content: "''",
								display: "block",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								background: "rgba(30, 47, 60, 0.75)",
								backgroundImage:
									"radial-gradient(circle at 20% 50%, rgba(30, 47, 60, 0.75) 0%, rgba(48, 65, 78, 0.75) 100%)",
							},
						},
						backdropImage: {
							display: "block",
							width: "100%",
							height: "100%",
							objectFit: "cover",
						},
						poster: {
							width: "100%",
							borderRadius: 10,
							boxShadow: "0px 3px 20px #0000003b",
						},
						releaseDate: { fontSize: "11pt", color: "#dadde2" },
						vote: { display: "flex", alignItems: "center", fontSize: "12pt" },
						genreList: {
							listStyle: "none",
							padding: 0,
							display: "flex",
							flexWrap: "wrap",
						},
						genre: {
							cursor: "pointer",
							padding: "1px 6px",
							marginRight: 10,
							border: "1px solid white",
							borderRadius: 4,
							fontSize: "10pt",
						},
						subtitle: { marginBottom: 8, fontSize: "13pt", color: "white" },
						crewList: { listStyle: "none", padding: 0 },
					};
				}),
				Ge = a(595),
				Je = a(610),
				Ke = a(609),
				Qe = a(87),
				et = a(623),
				tt = a(624);
			var at = function (e) {
					var t = Object(E.a)().t,
						a = Object(z.c)(function (e) {
							return e.user;
						}),
						s = Object(r.useState)(0),
						c = Object(W.a)(s, 2),
						o = c[0],
						l = c[1],
						d = Object(r.useState)(0),
						u = Object(W.a)(d, 2),
						m = u[0],
						j = u[1],
						b = {};
					return (
						(b = e.video
							? { videoId: e.videoId, userId: e.userId }
							: { commentId: e.commentId, userId: e.userId }),
						Object(r.useEffect)(
							function () {
								var e = !0;
								return (
									x.a.post("/api/like/getLikes", b).then(function (t) {
										t.data.success && e && l(t.data.likes.length);
									}),
									function () {
										e = !1;
									}
								);
							},
							[e, b]
						),
						Object(r.useEffect)(
							function () {
								var e = !0;
								return (
									x.a.post("/api/like/getDislikes", b).then(function (t) {
										t.data.success && e && j(t.data.dislikes.length);
									}),
									function () {
										e = !1;
									}
								);
							},
							[e, b]
						),
						Object(n.jsxs)(i.a.Fragment, {
							children: [
								Object(n.jsxs)(
									"span",
									{
										children: [
											Object(n.jsx)(Qe.a, {
												title: t("movie.like"),
												children: Object(n.jsx)(et.a, {
													twoToneColor: "#19ba90",
													type: "like",
													onClick: function () {
														if (a.userData && !a.userData.isAuth)
															return e.history.push("/login");
														x.a.post("/api/like/upLike", b).then(function (t) {
															if (!t.data.success)
																return e.history.push("/login");
															!0 === t.data.up
																? (l(o + 1), 0 !== m && j(m - 1))
																: l(o - 1);
														});
													},
												}),
											}),
											Object(n.jsx)("span", {
												style: { paddingLeft: "8px", cursor: "auto" },
												children: o,
											}),
										],
									},
									"comment-basic-like"
								),
								"\xa0\xa0\xa0\xa0",
								Object(n.jsxs)(
									"span",
									{
										children: [
											Object(n.jsx)(Qe.a, {
												title: t("movie.dislike"),
												children: Object(n.jsx)(tt.a, {
													twoToneColor: "#19ba90",
													type: "dislike",
													onClick: function () {
														if (a.userData && !a.userData.isAuth)
															return e.history.push("/login");
														x.a
															.post("/api/like/upDisLike", b)
															.then(function (t) {
																if (!t.data.success)
																	return e.history.push("/login");
																!0 === t.data.up
																	? (j(m + 1), 0 !== o && l(o - 1))
																	: j(m - 1);
															});
													},
												}),
											}),
											Object(n.jsx)("span", {
												style: { paddingLeft: "8px", cursor: "auto" },
												children: m,
											}),
										],
									},
									"comment-basic-dislike"
								),
							],
						})
					);
				},
				nt = J.a.Meta,
				rt = Object(le.a)({
					scriptUrl: "//at.alicdn.com/t/font_1804216_o2mk1ztsiol.js",
				}),
				it = we.a.TextArea;
			var st = function (e) {
				var t = Object(E.a)().t,
					a = Object(z.c)(function (e) {
						return e.user;
					}),
					i = Object(r.useState)(""),
					s = Object(W.a)(i, 2),
					c = s[0],
					o = s[1],
					l = Object(r.useState)(!1),
					d = Object(W.a)(l, 2),
					u = d[0],
					m = d[1],
					j = function (n) {
						if ((n.preventDefault(), !c))
							return Ie.b.error(t("movie.replyEmptyCom"));
						var r,
							i = new Date(),
							s = {
								writer: a.userData._id,
								postId: e.postId,
								date: i,
								responseTo: e.comment._id,
								content:
									((r = c),
									(r = r.toString()).replace(
										/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g,
										""
									)),
							};
						x.a.post("/api/comment/saveComment", s).then(function (a) {
							a.data.success
								? (o(""), m(!u), e.refreshFunction(a.data.result))
								: Ie.b.error(t("movie.failCom"));
						});
					},
					b = [
						Object(n.jsx)(at, {
							comment: !0,
							commentId: e.comment._id,
							userId: localStorage.getItem("userId"),
						}),
						Object(n.jsx)(
							"span",
							{
								onClick: function () {
									m(!u);
								},
								children: t("movie.reply"),
							},
							"comment-basic-reply-to"
						),
					],
					p = Object(r.useState)(!1),
					h = Object(W.a)(p, 2),
					g = h[0],
					f = h[1],
					O = function () {
						f(!0);
					},
					v = function () {
						f(!1);
					};
				return Object(n.jsxs)("div", {
					children: [
						Object(n.jsx)(Ge.a, {
							actions: b,
							author:
								e.comment.writer && e.comment.writer.username
									? Object(n.jsx)("b", {
											onClick: O,
											style: { cursor: "pointer" },
											children: e.comment.writer.username,
									  })
									: t("movie.userDeleted"),
							avatar: Object(n.jsx)(Je.a, {
								onClick: O,
								src:
									e.comment.writer && e.comment.writer.image
										? e.comment.writer.image
										: t("landing.notAvail"),
								alt: "image",
							}),
							datetime: ee()(e.comment.date).format("DD/MM/YYYY - HH:mm"),
							content: Object(n.jsx)("p", { children: e.comment.content }),
						}),
						e.comment.writer
							? Object(n.jsx)(Ke.a, {
									title: ""
										.concat(t("users.profileTitle"), " - ")
										.concat(e.comment.writer.username),
									visible: g,
									onCancel: v,
									width: 610,
									style: { top: 20 },
									footer: [
										Object(n.jsx)(
											H.a,
											{
												type: "primary",
												onClick: v,
												children: t("movieInfo.close"),
											},
											"Close"
										),
									],
									children: Object(n.jsxs)(J.a, {
										hoverable: !0,
										style: {
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										},
										cover: Object(n.jsx)(Je.a, {
											src: e.comment.writer.image,
											size: 84,
										}),
										children: [
											Object(n.jsx)(nt, {
												title: Object(n.jsx)("b", {
													children: e.comment.writer.username,
												}),
											}),
											Object(n.jsx)("br", {}),
											Object(n.jsxs)("span", {
												children: [
													e.comment.writer.firstName,
													" ",
													e.comment.writer.lastName,
												],
											}),
										],
									}),
							  })
							: null,
						u &&
							Object(n.jsxs)("form", {
								style: { display: "flex" },
								onSubmit: j,
								children: [
									Object(n.jsx)(it, {
										style: { width: "100%", borderRadius: "5px" },
										onChange: function (e) {
											o(e.currentTarget.value);
										},
										value: c,
										placeholder: t("movie.comReply"),
									}),
									Object(n.jsx)("br", {}),
									Object(n.jsx)(H.a, {
										style: { width: "20%", height: "52px" },
										onClick: j,
										children: Object(n.jsx)(rt, {
											type: "icon-send",
											style: { fontSize: "20px" },
										}),
									}),
								],
							}),
					],
				});
			};
			var ct = function e(t) {
					var a,
						s = Object(E.a)().t,
						c = Object(r.useState)(0),
						o = Object(W.a)(c, 2),
						l = o[0],
						d = o[1],
						u = Object(r.useState)(!1),
						m = Object(W.a)(u, 2),
						j = m[0],
						b = m[1];
					return (
						Object(r.useEffect)(
							function () {
								var e = 0;
								t.CommentLists.forEach(function (a) {
									a.responseTo === t.parentCommentId && e++;
								}),
									d(e);
							},
							[t.CommentLists, t.parentCommentId]
						),
						Object(n.jsxs)("div", {
							children: [
								l > 0 &&
									Object(n.jsxs)("p", {
										style: { fontSize: "14px", margin: 0, color: "gray" },
										onClick: function () {
											b(!j);
										},
										children: [
											s("movie.view"),
											" ",
											l,
											" ",
											s("movie.moreComs"),
										],
									}),
								j &&
									((a = t.parentCommentId),
									t.CommentLists.map(function (r, s) {
										return Object(n.jsx)(
											i.a.Fragment,
											{
												children:
													r.responseTo === a &&
													Object(n.jsxs)("div", {
														style: { width: "80%", marginLeft: "40px" },
														children: [
															Object(n.jsx)(st, {
																comment: r,
																postId: t.postId,
																refreshFunction: t.refreshFunction,
															}),
															Object(n.jsx)(e, {
																CommentLists: t.CommentLists,
																parentCommentId: r._id,
																postId: t.postId,
																refreshFunction: t.refreshFunction,
															}),
														],
													}),
											},
											r._id
										);
									})),
							],
						})
					);
				},
				ot = a(625),
				lt = Object(le.a)({
					scriptUrl: "//at.alicdn.com/t/font_1804216_o2mk1ztsiol.js",
				}),
				dt = we.a.TextArea,
				ut = Y.a.Title;
			var mt = function (e) {
					var t = Object(E.a)().t,
						a = Object(z.c)(function (e) {
							return e.user;
						}),
						s = Object(r.useState)(""),
						c = Object(W.a)(s, 2),
						o = c[0],
						l = c[1],
						d = function (n) {
							if ((n.preventDefault(), a.userData && !a.userData.isAuth))
								return Ie.b.error(t("movie.loginFirst"));
							if (!o) return Ie.b.error(t("movie.emptyCom"));
							var r,
								i = {
									content:
										((r = o),
										(r = r.toString()).replace(
											/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g,
											""
										)),
									writer: a.userData._id,
									postId: e.postId,
								};
							x.a.post("/api/comment/saveComment", i).then(function (a) {
								a.data.success
									? (l(""), e.refreshFunction(a.data.result))
									: Ie.b.error(t("movie.failCom"));
							});
						};
					return Object(n.jsxs)("div", {
						children: [
							Object(n.jsx)("br", {}),
							Object(n.jsxs)(ut, {
								level: 3,
								children: [
									Object(n.jsx)(ot.a, {
										style: { paddingRight: "10px", fontSize: "30px" },
									}),
									t("movie.share"),
									" ",
									e.movieTitle,
									" ",
								],
							}),
							Object(n.jsx)("hr", {}),
							e.CommentLists &&
								e.CommentLists.map(function (t, a) {
									return (
										!t.responseTo &&
										Object(n.jsxs)(
											i.a.Fragment,
											{
												children: [
													Object(n.jsx)(st, {
														comment: t,
														postId: e.postId,
														refreshFunction: e.refreshFunction,
													}),
													Object(n.jsx)(ct, {
														CommentLists: e.CommentLists,
														postId: e.postId,
														parentCommentId: t._id,
														refreshFunction: e.refreshFunction,
													}),
												],
											},
											t._id
										)
									);
								}),
							e.CommentLists &&
								0 === e.CommentLists.length &&
								Object(n.jsx)("div", {
									style: {
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										height: "100px",
									},
									children: t("movie.comFirst"),
								}),
							Object(n.jsxs)("form", {
								style: { display: "flex" },
								onSubmit: d,
								children: [
									Object(n.jsx)(dt, {
										style: { width: "100%", borderRadius: "5px" },
										onChange: function (e) {
											l(e.currentTarget.value);
										},
										value: o,
										placeholder: t("movie.comText"),
									}),
									Object(n.jsx)("br", {}),
									Object(n.jsx)(H.a, {
										style: { width: "20%", height: "52px" },
										onClick: d,
										children: Object(n.jsx)(lt, {
											type: "icon-send",
											style: { fontSize: "20px" },
										}),
									}),
								],
							}),
						],
					});
				},
				jt = a(225),
				bt = a.n(jt),
				pt = a(626),
				ht = a(596),
				gt = a(597),
				xt = a(554),
				ft = Object(le.a)({
					scriptUrl: "//at.alicdn.com/t/font_1804216_05evm2uwptc9.js",
				}),
				Ot = Object(le.a)({
					scriptUrl: "//at.alicdn.com/t/font_1804216_c1v18kzse7b.js",
				});
			var vt = function (e) {
				var t = Object(E.a)().t,
					a = Object(m.f)(),
					i = Object(z.c)(function (e) {
						return e.user;
					}),
					s = e.movieId,
					c = e.userFrom,
					o = e.movieInfo.title,
					l = e.movieInfo.backdrop_path,
					d = e.movieInfo.runtime,
					u = Object(r.useState)(0),
					j = Object(W.a)(u, 2),
					b = j[0],
					p = j[1],
					h = Object(r.useState)(!1),
					g = Object(W.a)(h, 2),
					f = g[0],
					O = g[1],
					v = {
						movieId: s,
						userFrom: c,
						movieTitle: o,
						moviePost: l,
						movieRunTime: d,
					};
				return (
					Object(r.useEffect)(
						function () {
							var e = !0;
							return (
								x.a
									.post("/api/favorite/favoriteNumber", v)
									.then(function (t) {
										t.data.success
											? e && p(t.data.subscribeNumber)
											: a.push("/");
									})
									.catch(function (e) {
										console.log(e);
									}),
								function () {
									e = !1;
								}
							);
						},
						[e, a, v]
					),
					Object(r.useEffect)(
						function () {
							var e = !0;
							return (
								x.a.post("/api/favorite/favorited", v).then(function (t) {
									t.data.success ? e && O(t.data.subcribed) : a.push("/");
								}),
								function () {
									e = !1;
								}
							);
						},
						[e, v, a]
					),
					Object(n.jsx)(n.Fragment, {
						children: Object(n.jsxs)(H.a, {
							type: "primary",
							onClick: function () {
								if (i.userData && !i.userData.isAuth) return a.push("/");
								f
									? x.a
											.post("/api/favorite/removeFromFavorite", v)
											.then(function (e) {
												e.data.success ? (p(b - 1), O(!f)) : a.push("/");
											})
									: x.a
											.post("/api/favorite/addToFavorite", v)
											.then(function (e) {
												e.data.success ? (p(b + 1), O(!f)) : a.push("/");
											});
							},
							children: [
								t(f ? "favorites.remove" : "favorites.add"),
								f
									? Object(n.jsx)(Ot, {
											type: "icon-popcorn1",
											style: { fontSize: "20px" },
									  })
									: Object(n.jsx)(ft, {
											type: "icon-popcorn",
											style: { fontSize: "20px" },
									  }),
								b,
							],
						}),
					})
				);
			};
			var yt = function (e) {
					var t = Object(r.useState)(!1),
						a = Object(W.a)(t, 2),
						s = a[0],
						c = a[1],
						o = Xe(),
						l = Object(E.a)().t,
						d = e.movie,
						u = e.directors,
						m = e.cast,
						j = e.trailer,
						b = "#999",
						p = "#cd5c5c",
						h = "#ffa500",
						g = "#52c41a",
						x = (function (e) {
							var t = g;
							return (
								e && 0 !== d.vote_average
									? e < 5.5
										? (t = p)
										: e < 7 && (t = h)
									: (t = b),
								t
							);
						})(d.vote_average),
						f = Object(le.a)({
							scriptUrl: "//at.alicdn.com/t/font_1804216_3easwvxbvnh.js",
						}),
						O = [],
						v = "";
					if (j.length > 0) {
						var y;
						for (y = 0; y < j.length; y++)
							"Trailer" === j[y].type && O.push(j[y].key);
						O.length > 0 &&
							(v = "https://www.youtube.com/embed/" + O[0] + "?&autoplay=1");
					}
					var w = function () {
							c(!1);
						},
						_ = "https://www.youtube.com/embed/" + O[0] + "?&autoplay=0",
						S = s ? v : _;
					return Object(n.jsxs)("main", {
						style: { position: "relative" },
						children: [
							Object(n.jsx)("div", {
								className: o.backdrop,
								children: Object(n.jsx)("img", {
									className: o.backdropImage,
									src: d.backdrop_path
										? "".concat(k).concat(I).concat(d.backdrop_path)
										: "https://res.cloudinary.com/dkyqbngya/image/upload/v1586787757/detykqycj7ejezsjmxln.png",
									alt: "",
								}),
							}),
							Object(n.jsx)(ht.a, {
								className: o.movieContainer,
								children: Object(n.jsxs)(gt.a, {
									container: !0,
									spacing: 7,
									children: [
										Object(n.jsx)(gt.a, {
											item: !0,
											md: 3,
											children: Object(n.jsx)("img", {
												className: o.poster,
												src: d.poster_path
													? "".concat(k).concat(F).concat(d.poster_path)
													: l("landing.notAvail"),
												alt: "Poster of " + d.title,
											}),
										}),
										Object(n.jsxs)(gt.a, {
											item: !0,
											md: 8,
											style: { color: "white" },
											children: [
												Object(n.jsx)("div", {
													className: o.releaseDate,
													children: Object(n.jsx)("h2", {
														style: { color: "white" },
														children: d.release_date
															? ee()(new Date(d.release_date)).format("YYYY")
															: "N/A",
													}),
												}),
												Object(n.jsxs)(xt.a, {
													variant: "h4",
													style: { fontWeight: "bold", color: "white" },
													component: "h1",
													children: [
														Object(n.jsx)(f, {
															type: "icon-movie1",
															style: { fontSize: "30px", paddingRight: "10px" },
														}),
														d.title,
													],
												}),
												d.genres.length
													? Object(n.jsx)("ul", {
															className: o.genreList,
															children: d.genres.map(function (e, t) {
																return Object(n.jsx)(
																	oe.b,
																	{
																		to: {
																			pathname: "/landing/genre/"
																				.concat(e.name, "/")
																				.concat(e.id),
																		},
																		children: Object(n.jsx)(
																			"li",
																			{ className: o.genre, children: e.name },
																			e.id
																		),
																	},
																	t
																);
															}),
													  })
													: null,
												Object(n.jsx)("div", {
													className: o.vote,
													children: Object(n.jsxs)("span", {
														style: { margin: "2px 0px 0 6px" },
														children: [
															Object(n.jsx)(K.a, {
																style: { backgroundColor: x, marginRight: 16 },
																offset: [0, 0],
																count: d.vote_average,
															}),
															Object(n.jsx)(vt, {
																movieInfo: d,
																movieId: d.id,
																userFrom: localStorage.getItem("userId"),
															}),
															j
																? Object(n.jsxs)(n.Fragment, {
																		children: [
																			Object(n.jsxs)(H.a, {
																				type: "primary",
																				style: { margin: "15px" },
																				onClick: function () {
																					c(!0);
																				},
																				children: [
																					Object(n.jsx)(pt.a, {
																						style: { fontSize: "20px" },
																					}),
																					" ",
																					l("movieInfo.trailer"),
																				],
																			}),
																			Object(n.jsx)(Ke.a, {
																				title: ""
																					.concat(
																						l("movieInfo.trailerTitle"),
																						" "
																					)
																					.concat(d.title, " ")
																					.concat(l("movieInfo.watchHyper")),
																				visible: s,
																				onCancel: w,
																				width: 610,
																				style: { top: 20 },
																				footer: [
																					Object(n.jsx)(
																						H.a,
																						{
																							type: "primary",
																							onClick: w,
																							children: l("movieInfo.close"),
																						},
																						"Close"
																					),
																				],
																				children: Object(n.jsx)("div", {
																					className: "iframe-container",
																					children: Object(n.jsx)("iframe", {
																						title: d.title,
																						width: "560",
																						height: "315",
																						src: S,
																						frameBorder: "0",
																						sameSite: "none; secure",
																						Secure: !0,
																						allow:
																							"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
																						allowFullScreen: !0,
																					}),
																				}),
																			}),
																		],
																  })
																: null,
														],
													}),
												}),
												Object(n.jsxs)("div", {
													style: { marginTop: 10, marginBottom: 10 },
													children: [
														Object(n.jsxs)(xt.a, {
															component: "div",
															style: { marginRight: 15 },
															children: [
																Object(n.jsx)("b", {
																	children: l("movieInfo.runtime"),
																}),
																" ",
																d.runtime
																	? (function (e) {
																			var t = Math.floor(e / 60),
																				a = e % 60;
																			return (
																				a < 10 && (a = "0" + a),
																				"".concat(t, "h ").concat(a, "min")
																			);
																	  })(d.runtime)
																	: "N/A",
															],
														}),
														Object(n.jsxs)(xt.a, {
															component: "div",
															children: [
																Object(n.jsx)("b", {
																	children: l("movieInfo.movietitle"),
																}),
																" ",
																d.original_title,
															],
														}),
														Object(n.jsxs)(xt.a, {
															component: "div",
															children: [
																Object(n.jsx)("b", {
																	children: l("movieInfo.actors"),
																}),
																" ",
																m
																	.map(function (e) {
																		return e.name;
																	})
																	.slice(0, 5)
																	.join(", "),
																Object(n.jsx)("br", {}),
																Object(n.jsx)("b", {
																	children: l("movieInfo.director"),
																}),
																" ",
																u
																	.map(function (e) {
																		return e.name;
																	})
																	.join(", "),
																Object(n.jsx)("br", {}),
																Object(n.jsx)("b", {
																	children: l("movieInfo.prod"),
																}),
																" ",
																d.production_companies
																	.map(function (e) {
																		return e.name;
																	})
																	.shift(),
															],
														}),
													],
												}),
												d.overview &&
													Object(n.jsxs)(i.a.Fragment, {
														children: [
															Object(n.jsx)("h4", {
																className: o.subtitle,
																children: l("movieInfo.overview"),
															}),
															Object(n.jsx)(xt.a, {
																variant: "body1",
																children:
																	d.overview && d.overview.length > 700
																		? d.overview.substring(0, 700) + "..."
																		: d.overview,
															}),
														],
													}),
												Object(n.jsxs)("div", {
													style: { marginTop: 20 },
													children: [
														Object(n.jsxs)(xt.a, {
															component: "div",
															children: [
																Object(n.jsx)("b", {
																	children: l("movieInfo.budget"),
																}),
																" ",
																d.budget
																	? bt()(d.budget).format("0,0[.]00 $")
																	: "N/A",
															],
														}),
														Object(n.jsxs)(xt.a, {
															component: "div",
															children: [
																Object(n.jsx)("b", {
																	children: l("movieInfo.revenue"),
																}),
																" ",
																d.revenue
																	? bt()(d.revenue).format("0,0[.]00 $")
																	: "N/A",
															],
														}),
													],
												}),
											],
										}),
									],
								}),
							}),
						],
					});
				},
				wt = a(27),
				_t = a(28),
				St = a(50),
				Nt = a(51),
				Ct = a(598),
				kt = Y.a.Title,
				It = Object(le.a)({
					scriptUrl: "//at.alicdn.com/t/font_1804216_cpuj79al49d.js",
				}),
				Ft = (function (e) {
					Object(St.a)(a, e);
					var t = Object(Nt.a)(a);
					function a(e) {
						var n;
						return (
							Object(wt.a)(this, a),
							((n = t.call(this, e)).state = { data: "" }),
							"Recommended Movies" === e.type &&
								fetch(
									"https://api.themoviedb.org/3/movie/" +
										n.props.urlParams +
										"/recommendations?api_key=" +
										N +
										"&language=" +
										C
								)
									.then(function (e) {
										return e.json();
									})
									.then(function (e) {
										n.setState({ data: e.results });
									})
									.catch(function (e) {
										return console.error("Error:", e);
									}),
							n
						);
					}
					return (
						Object(_t.a)(a, [
							{
								key: "render",
								value: function () {
									var e = this.props.t;
									if ("" === this.state.data) return "";
									var t = [];
									for (var a in this.state.data.slice(0, 5))
										this.state.data[a].vote_count > 2300 &&
											null !== this.state.data[a].backdrop_path &&
											null !== this.state.data[a].overview &&
											t.push(
												Object(n.jsx)(
													i.a.Fragment,
													{
														children: Object(n.jsx)(te, {
															movie: !0,
															className: "similar_movies",
															image: this.state.data[a].poster_path
																? ""
																		.concat(k)
																		.concat(F)
																		.concat(this.state.data[a].poster_path)
																: e("landing.notAvail"),
															movieId: this.state.data[a].id,
															movieName: this.state.data[a].title,
															date: this.state.data[a].release_date,
															vote: this.state.data[a].vote_average
																? this.state.data[a].vote_average
																: "N/A",
														}),
													},
													a
												)
											);
									return Object(n.jsxs)("div", {
										children: [
											Object(n.jsxs)(kt, {
												level: 3,
												children: [
													Object(n.jsx)(It, {
														type: "icon-movie",
														style: { fontSize: "35px", paddingRight: "10px" },
													}),
													e("movie.recommended"),
												],
											}),
											Object(n.jsx)("hr", {}),
											Object(n.jsx)("br", {}),
											Object(n.jsx)(V.a, {
												gutter: [16, 16],
												children:
													0 === this.state.data.length
														? Object(n.jsx)("div", {
																style: {
																	display: "flex",
																	justifyContent: "center",
																	alignItems: "center",
																	height: "100px",
																},
																children: e("movie.recoNone"),
														  })
														: t,
											}),
										],
									});
								},
							},
						]),
						a
					);
				})(i.a.Component),
				Mt = Object(Ct.a)()(Ft),
				Tt = Y.a.Title,
				zt = Object(le.a)({
					scriptUrl: "//at.alicdn.com/t/font_1804216_cpuj79al49d.js",
				}),
				qt = (function (e) {
					Object(St.a)(a, e);
					var t = Object(Nt.a)(a);
					function a(e) {
						var n;
						return (
							Object(wt.a)(this, a),
							((n = t.call(this, e)).state = { data: "" }),
							"Similar Movies" === e.type &&
								fetch(
									"https://api.themoviedb.org/3/movie/" +
										n.props.urlParams +
										"/similar?api_key=" +
										N +
										"&language=" +
										C
								)
									.then(function (e) {
										return e.json();
									})
									.then(function (e) {
										n.setState({ data: e.results });
									})
									.catch(function (e) {
										return console.error("Error:", e);
									}),
							n
						);
					}
					return (
						Object(_t.a)(a, [
							{
								key: "render",
								value: function () {
									var e = this.props.t;
									if (!this.state.data) return "";
									if ("" === this.state.data) return "";
									var t = [];
									for (var a in this.state.data.slice(0, 5))
										this.state.data[a].vote_count > 2300 &&
											null !== this.state.data[a].backdrop_path &&
											null !== this.state.data[a].overview &&
											t.push(
												Object(n.jsx)(
													i.a.Fragment,
													{
														children: Object(n.jsx)(te, {
															movie: !0,
															className: "similar_movies",
															image: this.state.data[a].poster_path
																? ""
																		.concat(k)
																		.concat(F)
																		.concat(this.state.data[a].poster_path)
																: e("landing.notAvail"),
															movieId: this.state.data[a].id,
															movieName: this.state.data[a].title,
															date: this.state.data[a].release_date,
															vote: this.state.data[a].vote_average
																? this.state.data[a].vote_average
																: "N/A",
														}),
													},
													a
												)
											);
									return Object(n.jsxs)("div", {
										children: [
											Object(n.jsxs)(Tt, {
												level: 3,
												children: [
													Object(n.jsx)(zt, {
														type: "icon-movie",
														style: { fontSize: "35px", paddingRight: "10px" },
													}),
													e("movie.similar"),
												],
											}),
											Object(n.jsx)("hr", {}),
											Object(n.jsx)("br", {}),
											Object(n.jsx)(V.a, {
												gutter: [16, 16],
												children:
													0 === this.state.data.length
														? Object(n.jsx)("div", {
																style: {
																	display: "flex",
																	justifyContent: "center",
																	alignItems: "center",
																	height: "100px",
																},
																children: e("movie.similarNone"),
														  })
														: t,
											}),
										],
									});
								},
							},
						]),
						a
					);
				})(i.a.Component),
				Et = Object(Ct.a)()(qt),
				Rt = a(599);
			var At = function (e) {
					var t = Xe(),
						a = Object(E.a)().t,
						s = localStorage.getItem("language"),
						c = Y.a.Title,
						o = e.match.params.movieId,
						l = Object(r.useState)([]),
						d = Object(W.a)(l, 2),
						u = d[0],
						m = d[1],
						j = Object(r.useState)([]),
						b = Object(W.a)(j, 2),
						p = b[0],
						h = b[1],
						g = Object(r.useState)([]),
						f = Object(W.a)(g, 2),
						O = f[0],
						v = f[1],
						y = Object(r.useState)([]),
						w = Object(W.a)(y, 2),
						_ = w[0],
						C = w[1],
						k = Object(r.useState)([]),
						I = Object(W.a)(k, 2),
						F = I[0],
						M = I[1],
						T = Object(r.useState)(!0),
						q = Object(W.a)(T, 2),
						R = q[0],
						A = q[1],
						D = Object(r.useState)(!0),
						P = Object(W.a)(D, 2),
						B = P[0],
						U = P[1],
						H = Object(r.useState)(!1),
						$ = Object(W.a)(H, 2),
						Z = $[0],
						X = $[1],
						G = Object(le.a)({
							scriptUrl: "//at.alicdn.com/t/font_1804216_vq7xtyn73yj.js",
						}),
						J = e.match.params.movieId,
						K = { postId: J },
						Q = Object(z.c)(function (e) {
							return e.user;
						}),
						ee = [],
						ae = "";
					if (O.length > 0) {
						var ne;
						for (ne = 0; ne < O.length; ne++)
							"Trailer" === O[ne].type && ee.push(O[ne].key);
						ee.length > 0 && (ae = "https://www.youtube.com/embed/" + ee[0]);
					}
					return (
						Object(r.useEffect)(
							function () {
								var t = !0,
									n = ""
										.concat(S, "movie/")
										.concat(o, "?api_key=")
										.concat(N, "&language=")
										.concat(s);
								return (
									fetch(n)
										.then(function (e) {
											return e.json();
										})
										.then(function (n) {
											if (n.status_code)
												t && A(!0),
													Ie.b.error(a("landing.nomovie")),
													e.history.push("/landing");
											else {
												t && m(n), t && A(!1);
												var r = ""
														.concat(S, "movie/")
														.concat(o, "/credits?api_key=")
														.concat(N),
													i = (function () {
														var e = localStorage.getItem("language");
														return e
															? ""
																	.concat(S, "movie/")
																	.concat(o, "/videos?api_key=")
																	.concat(N, "&language=")
																	.concat(e)
															: ""
																	.concat(S, "movie/")
																	.concat(o, "/videos?api_key=")
																	.concat(N);
													})();
												fetch(r)
													.then(function (e) {
														return e.json();
													})
													.then(function (e) {
														t && C(e.cast);
														var a = e.crew.filter(function (e) {
															return "Director" === e.job;
														});
														t && h(a);
													}),
													U(!1),
													fetch(i)
														.then(function (e) {
															return e.json();
														})
														.then(function (e) {
															t && v(e.results);
														});
											}
										})
										.catch(function (e) {
											return console.error("Error:", e);
										}),
									x.a.post("/api/comment/getComments", K).then(function (a) {
										a.data.success
											? t && M(a.data.comments)
											: e.history.push("/login");
									}),
									function () {
										t = !1;
									}
								);
							},
							[o, a, e, s]
						),
						Object(n.jsx)("div", {
							children:
								Q.userData && Q.userData.isAuth
									? Object(n.jsxs)(n.Fragment, {
											children: [
												!R && O
													? Object(n.jsx)(yt, {
															movie: u,
															directors: p,
															cast: _,
															trailer: O,
													  })
													: Object(n.jsx)("div", {
															children: Object(n.jsx)(L, {}),
													  }),
												Object(n.jsxs)("div", {
													style: { width: "85%", margin: "1rem auto" },
													children: [
														R
															? null
															: Object(n.jsx)("div", {
																	style: {
																		display: "flex",
																		justifyContent: "center",
																		margin: "2rem",
																	},
																	children: Object(n.jsx)(Rt.a, {
																		variant: "contained",
																		className: t.buttonActors,
																		onClick: function () {
																			X(!Z);
																		},
																		children: a(
																			Z
																				? "movie.dontShowActors"
																				: "movie.showActors"
																		),
																	}),
															  }),
														Z &&
															Object(n.jsx)(V.a, {
																gutter: [16, 16],
																children: B
																	? Object(n.jsx)("div", {
																			children: Object(n.jsx)(L, {}),
																	  })
																	: _.map(function (e, t) {
																			return (
																				e.profile_path &&
																				Object(n.jsx)(
																					i.a.Fragment,
																					{
																						children: Object(n.jsx)(te, {
																							actor: !0,
																							image: e.profile_path,
																							actorName: e.name,
																							charName: e.character,
																						}),
																					},
																					e.id
																				)
																			);
																	  }),
															}),
														Object(n.jsx)("br", {}),
														Object(n.jsxs)(c, {
															level: 3,
															children: [
																Object(n.jsx)(G, {
																	type: "icon-movie2",
																	style: {
																		fontSize: "28px",
																		paddingRight: "10px",
																	},
																}),
																a("movie.streamTitle"),
																" ",
																u.title,
															],
														}),
														Object(n.jsx)("hr", {}),
														Object(n.jsx)("br", {}),
														Object(n.jsx)("label", {
															children: Object(n.jsx)("p", {
																style: {
																	color: "#ff0000bf",
																	textAlign: "center",
																	fontSize: "1rem",
																	border: "1px solid",
																	padding: "0.5rem",
																	borderRadius: "10px",
																},
																children:
																	"For legal reasons - this demo only allows you to watch the associated Youtube trailer.",
															}),
														}),
														Object(n.jsx)("div", {
															style: {
																display: "flex",
																justifyContent: "center",
																margin: "2rem",
															},
															children: Object(n.jsx)("div", {
																className: "iframe-container",
																children: Object(n.jsx)("iframe", {
																	title: u.title,
																	width: "560",
																	height: "315",
																	src: ae,
																	frameBorder: "0",
																	sameSite: "none; secure",
																	Secure: !0,
																	allow:
																		"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
																	allowFullScreen: !0,
																}),
															}),
														}),
														Object(n.jsx)("div", {
															style: {
																display: "flex",
																justifyContent: "center",
															},
															children: Object(n.jsx)(at, {
																video: !0,
																videoId: o,
																userId: localStorage.getItem("userId"),
															}),
														}),
														Object(n.jsx)(mt, {
															movieTitle: u.title,
															CommentLists: F,
															postId: J,
															refreshFunction: function (e) {
																M(F.concat(e));
															},
														}),
														Object(n.jsx)("br", {}),
														R
															? null
															: Object(n.jsx)("div", {
																	children: Object(n.jsx)(Mt, {
																		type: "Recommended Movies",
																		urlParams: o,
																	}),
															  }),
														R
															? null
															: Object(n.jsx)("div", {
																	children: Object(n.jsx)(Et, {
																		type: "Similar Movies",
																		urlParams: o,
																	}),
															  }),
													],
												}),
											],
									  })
									: Object(n.jsx)(L, {}),
						})
					);
				},
				Dt = a(303),
				Pt = (a(549), a(627)),
				Lt = a(628),
				Bt = Y.a.Title,
				Ut = Object(le.a)({
					scriptUrl: "//at.alicdn.com/t/font_1804216_3easwvxbvnh.js",
				}),
				Wt = Object(le.a)({
					scriptUrl: "//at.alicdn.com/t/font_1804216_05evm2uwptc9.js",
				});
			var Yt = function () {
					var e = Object(E.a)().t,
						t = Object(r.useState)([]),
						a = Object(W.a)(t, 2),
						i = a[0],
						s = a[1],
						c = Object(r.useState)(!0),
						o = Object(W.a)(c, 2),
						l = o[0],
						d = o[1],
						u = Object(m.f)(),
						j = { userFrom: localStorage.getItem("userId") },
						b = function (e) {
							var t = Math.floor(e / 60),
								a = e % 60;
							return (
								a < 10 && (a = "0" + a), "".concat(t, "h ").concat(a, "min")
							);
						};
					Object(r.useEffect)(function () {
						p();
					}, []);
					var p = function () {
							x.a.post("/api/favorite/getFavoredMovie", j).then(function (e) {
								e.data.success
									? (s(e.data.favorites), d(!1))
									: u.push("/login");
							});
						},
						h = i.map(function (t, a) {
							var r = Object(n.jsx)("div", {
								children: t.moviePost
									? Object(n.jsx)("img", {
											src: "".concat(k).concat(F).concat(t.moviePost),
											alt: "",
									  })
									: "no image",
							});
							return Object(n.jsxs)(
								"tr",
								{
									children: [
										Object(n.jsx)(Dt.a, {
											content: r,
											title: "".concat(t.movieTitle),
											children: Object(n.jsxs)("td", {
												children: [
													Object(n.jsx)(Ut, {
														type: "icon-movie1",
														style: { fontSize: "20px", paddingRight: "10px" },
													}),
													Object(n.jsx)("strong", {
														children: Object(n.jsx)("a", {
															style: { color: "black" },
															href: "/movie/".concat(t.movieId),
															children: t.movieTitle,
														}),
													}),
												],
											}),
										}),
										Object(n.jsx)("td", {
											children: Object(n.jsxs)("center", {
												children: [
													Object(n.jsx)(Pt.a, {
														style: { paddingRight: "10px" },
													}),
													b(t.movieRunTime),
												],
											}),
										}),
										Object(n.jsx)("td", {
											children: Object(n.jsx)("center", {
												children: Object(n.jsxs)(H.a, {
													type: "primary",
													onClick: function () {
														return (function (e, t) {
															var a = { movieId: e, userFrom: t };
															x.a
																.post("/api/favorite/removeFromFavorite", a)
																.then(function (e) {
																	e.data.success ? p() : u.push("/login");
																});
														})(t.movieId, t.userFrom);
													},
													children: [
														Object(n.jsx)(Lt.a, {}),
														e("favorites.removeButton"),
													],
												}),
											}),
										}),
									],
								},
								t._id
							);
						});
					return Object(n.jsxs)("div", {
						style: { width: "85%", margin: "3rem auto" },
						children: [
							Object(n.jsxs)(Bt, {
								level: 2,
								children: [
									Object(n.jsx)(Wt, {
										type: "icon-popcorn",
										style: { paddingRight: "10px" },
									}),
									e("favorites.title"),
								],
							}),
							Object(n.jsx)("hr", {}),
							Object(n.jsx)("br", {}),
							!l &&
								Object(n.jsxs)("table", {
									children: [
										Object(n.jsx)("thead", {
											children: Object(n.jsxs)("tr", {
												children: [
													Object(n.jsxs)("th", {
														children: [
															Object(n.jsx)(Ut, {
																type: "icon-movie1",
																style: {
																	fontSize: "20px",
																	paddingRight: "10px",
																},
															}),
															e("favorites.movieTitle"),
														],
													}),
													Object(n.jsx)("th", {
														children: Object(n.jsxs)("center", {
															children: [
																Object(n.jsx)(Pt.a, {
																	style: { paddingRight: "10px" },
																}),
																e("favorites.movieRuntime"),
															],
														}),
													}),
													Object(n.jsx)("th", {
														children: Object(n.jsxs)("center", {
															children: [
																Object(n.jsx)(Lt.a, {
																	style: { paddingRight: "10px" },
																}),
																e("favorites.remove"),
															],
														}),
													}),
												],
											}),
										}),
										Object(n.jsx)("tbody", { children: h }),
									],
								}),
						],
					});
				},
				Ht = Y.a.Title,
				Vt = {
					labelCol: { xs: { span: 20 }, sm: { span: 8 } },
					wrapperCol: { xs: { span: 14 }, sm: { span: 6 } },
				},
				$t = {
					wrapperCol: {
						xs: { span: 20, offset: 0 },
						sm: { span: 14, offset: 8 },
					},
				};
			var Zt = function () {
					var e = Object(E.a)().t;
					return Object(n.jsx)(i.a.Fragment, {
						children: Object(n.jsx)(Oe.a, {
							initialValues: { password: "" },
							validationSchema: ve.a().shape({
								password: ve
									.c()
									.min(4, e("register.passwordMin"))
									.max(15, e("register.passwordMax"))
									.required(e("register.passwordErr")),
								password_confirm: ve
									.c()
									.oneOf([ve.b("password"), null], e("register.passwordMatch"))
									.required(e("register.cpasswordErr")),
							}),
							onSubmit: function (t, a) {
								var n = a.setSubmitting;
								setTimeout(function () {
									var a, r;
									((a = t.password),
									(r = t.password_confirm),
									x.a.post(
										"".concat(_, "/updatePassword"),
										{ password: a, password_confirm: r },
										{ headers: M }
									)).then(function (t) {
										200 === t.status
											? B.store.addNotification({
													message: e("editProfile.newpassok"),
													insert: "top",
													type: "success",
													container: "top-right",
													animationIn: ["animated", "fadeIn"],
													animationOut: ["animated", "fadeOut"],
													dismiss: { duration: 5e3, onScreen: !0 },
											  })
											: alert("Password Update Fail");
									}),
										n(!1);
								}, 500);
							},
							children: function (t) {
								var a = t.errors,
									r = t.values,
									i = t.touched,
									s = t.isSubmitting,
									c = t.handleChange,
									o = t.handleBlur,
									l = t.handleSubmit;
								return Object(n.jsxs)("div", {
									style: { width: "85%", margin: "3rem auto" },
									children: [
										Object(n.jsxs)(Ht, {
											level: 2,
											children: [
												Object(n.jsx)(Ne.a, {
													style: { paddingRight: "10px" },
												}),
												e("editProfile.editPassword"),
											],
										}),
										Object(n.jsx)("hr", {}),
										Object(n.jsx)("br", {}),
										Object(n.jsxs)(
											ye.a,
											Object(j.a)(
												Object(j.a)({ style: { minWidth: "375px" } }, Vt),
												{},
												{
													onSubmit: l,
													children: [
														Object(n.jsx)(we.a, {
															type: "text",
															name: "username",
															value: "",
															autoComplete: "username",
															style: { display: "none" },
														}),
														Object(n.jsxs)(ye.a.Item, {
															required: !0,
															label: e("editProfile.newpass"),
															hasFeedback: !0,
															validateStatus:
																a.password && i.password ? "error" : "success",
															children: [
																Object(n.jsx)(we.a, {
																	id: "password",
																	prefix: Object(n.jsx)(Ne.a, {
																		style: { color: "rgba(0,0,0,.25)" },
																	}),
																	placeholder: e("register.passwordForm"),
																	type: "password",
																	name: "password",
																	autoComplete: "current-password",
																	onChange: c,
																	onBlur: o,
																	value: r.password,
																	className:
																		a.password && i.password
																			? "text-input error"
																			: "text-input",
																}),
																a.password &&
																	i.password &&
																	Object(n.jsx)("div", {
																		className: "input-feedback",
																		children: a.password,
																	}),
															],
														}),
														Object(n.jsxs)(ye.a.Item, {
															required: !0,
															label: e("editProfile.newcpass"),
															hasFeedback: !0,
															validateStatus:
																a.password_confirm && i.password_confirm
																	? "error"
																	: "success",
															children: [
																Object(n.jsx)(we.a, {
																	id: "password_confirm",
																	prefix: Object(n.jsx)(Ne.a, {
																		style: { color: "rgba(0,0,0,.25)" },
																	}),
																	placeholder: e("register.cpasswordForm"),
																	type: "password",
																	name: "password_confirm",
																	autoComplete: "current-password",
																	value: r.password_confirm,
																	onChange: c,
																	onBlur: o,
																	className:
																		a.password_confirm && i.password_confirm
																			? "text-input error"
																			: "text-input",
																}),
																a.password_confirm &&
																	i.password_confirm &&
																	Object(n.jsx)("div", {
																		className: "input-feedback",
																		children: a.password_confirm,
																	}),
															],
														}),
														Object(n.jsx)(
															ye.a.Item,
															Object(j.a)(
																Object(j.a)({}, $t),
																{},
																{
																	children: Object(n.jsx)(H.a, {
																		onClick: l,
																		type: "primary",
																		disabled: s,
																		children: e("editProfile.updatePass"),
																	}),
																}
															)
														),
													],
												}
											)
										),
									],
								});
							},
						}),
					});
				},
				Xt = Y.a.Title,
				Gt = {
					labelCol: { xs: { span: 20 }, sm: { span: 8 } },
					wrapperCol: { xs: { span: 14 }, sm: { span: 6 } },
				},
				Jt = {
					wrapperCol: {
						xs: { span: 20, offset: 0 },
						sm: { span: 14, offset: 8 },
					},
				};
			var Kt = function () {
				var e = Object(E.a)(),
					t = e.t,
					a = e.i18n,
					s = Object(z.c)(function (e) {
						return e.user;
					}),
					c = Object(r.useState)(!1),
					o = Object(W.a)(c, 2),
					l = o[0],
					d = o[1],
					u = Object(r.useState)(""),
					b = Object(W.a)(u, 2),
					p = b[0],
					h = b[1],
					g = i.a.useState(""),
					f = Object(W.a)(g, 2),
					O = f[0],
					y = f[1],
					w = Object(r.useState)([]),
					S = Object(W.a)(w, 2),
					N = S[0],
					C = S[1],
					k = i.a.useRef(),
					I = Object(m.f)(),
					F = ["jpg", "jpeg", "png", "gif"],
					M = a.language;
				function T(e) {
					var t;
					(t = e.target.value),
						a.changeLanguage(t),
						localStorage.setItem("language", e.target.value);
				}
				Object(r.useEffect)(
					function () {
						x.a.get("/api/users/:userId").then(function (e) {
							e.data.success ? C(e.data.users) : I.push("/login");
						});
					},
					[I]
				);
				var q = function (e) {
						e.preventDefault(), y(e.target.value);
						var a = e.target.files[0],
							n = "https://api.cloudinary.com/v1_1/".concat(
								"dkyqbngya",
								"/image/upload"
							);
						if (a && 0 !== a.length && a) {
							var r = a.name.replace(/.*\./, "").toLowerCase();
							if (F.indexOf(r) < 0)
								return (
									Ie.b.error("".concat(a.type).concat(t("register.imgFormat"))),
									(k.current.value = ""),
									y(""),
									void h("")
								);
							if (a.size > 15e4)
								return (
									Ie.b.error(
										"".concat(a.name).concat(t("register.imgTooLarge"))
									),
									(k.current.value = ""),
									y(""),
									void h("")
								);
							var i = new FormData();
							i.append("file", a), i.append("upload_preset", "f7r0dz2t"), d(!0);
							x.a
								.post(n, i, {
									headers: { "X-Requested-With": "XMLHttpRequest" },
								})
								.then(function (e) {
									d(!1);
									var t = e.data.secure_url.split("/");
									t.splice(-3, 0, "w_125,c_scale");
									var a = new Image();
									(a.src = t.join("/")), h(a.src);
								})
								.catch(function (e) {
									if (e)
										switch (e.response.status) {
											case 400:
												Ie.b.error(t("register.imgInvalid"));
												break;
											case 404:
												Ie.b.error(t("register.imgNotFound"));
												break;
											case 500:
												Ie.b.error(t("register.imgError"));
										}
								});
						}
					},
					R = Object(z.b)();
				return s.userData && s.userData.isAuth
					? N.map(function (e, a) {
							return Object(n.jsxs)(
								i.a.Fragment,
								{
									children: [
										Object(n.jsx)(Oe.a, {
											initialValues: {
												email: e.email,
												firstName: e.firstName,
												lastName: e.lastName,
												username: e.username,
												image: p,
												lang: M,
											},
											validationSchema: ve.a().shape({
												username: ve
													.c()
													.required(t("register.usernameErr"))
													.matches(
														/^[A-Za-z0-9_]{2,20}$/,
														t("register.usernameRules")
													)
													.min(2, t("register.usernameMin"))
													.max(20, t("register.usernameMax")),
												firstName: ve
													.c()
													.required(t("register.firstNameErr"))
													.matches(/^[A-Z]+$/i, t("register.firstNameAlpha"))
													.min(2, t("register.firstNameMin"))
													.max(20, t("register.firstNameMax")),
												lastName: ve
													.c()
													.required(t("register.lastNameErr"))
													.matches(/^[A-Z]+$/i, t("register.lastNameAlpha"))
													.min(2, t("register.lastNameMin"))
													.max(20, t("register.lastNameMax")),
												email: ve
													.c()
													.email(t("register.emailInvalid"))
													.required(t("register.emailErr")),
											}),
											onSubmit: function (e, a) {
												var n = a.setSubmitting;
												setTimeout(function () {
													var a = {
														email: e.email,
														username: e.username,
														firstName: e.firstName,
														lastName: e.lastName,
														image: p,
														lang: M,
													};
													R(
														(function (e) {
															var t = x.a
																.post("".concat(_, "/update"), e)
																.then(function (e) {
																	return e.data;
																});
															return { type: v, payload: t };
														})(a)
													).then(function (e) {
														e.payload.success
															? B.store.addNotification({
																	message: t("editProfile.profileUpdated"),
																	insert: "top",
																	type: "success",
																	container: "top-right",
																	animationIn: ["animated", "fadeIn"],
																	animationOut: ["animated", "fadeOut"],
																	dismiss: { duration: 5e3, onScreen: !0 },
															  })
															: alert(e.payload.err);
													}),
														n(!1);
												}, 500);
											},
											children: function (a) {
												var r = a.errors,
													i = a.touched,
													s = a.isSubmitting,
													c = a.handleChange,
													o = a.handleBlur,
													d = a.handleSubmit;
												return Object(n.jsxs)("div", {
													style: { width: "85%", margin: "3rem auto" },
													children: [
														Object(n.jsxs)(Xt, {
															level: 2,
															children: [
																Object(n.jsx)(Se.a, {
																	style: { paddingRight: "10px" },
																}),
																t("editProfile.title"),
															],
														}),
														Object(n.jsx)("hr", {}),
														Object(n.jsx)("br", {}),
														Object(n.jsx)("main", {
															style: { position: "relative" },
															children: Object(n.jsxs)(
																ye.a,
																Object(j.a)(
																	Object(j.a)(
																		{ style: { minWidth: "375px" } },
																		Gt
																	),
																	{},
																	{
																		onSubmit: d,
																		children: [
																			Object(n.jsxs)(ye.a.Item, {
																				required: !0,
																				label: t("editProfile.avatar"),
																				children: [
																					Object(n.jsx)("div", {
																						name: "image",
																						className: "imagePreview",
																						children: p
																							? Object(n.jsx)(Je.a, {
																									src: p,
																									size: 130,
																							  })
																							: l
																							? Object(n.jsx)(L, {})
																							: Object(n.jsx)(Je.a, {
																									src: e.image,
																									alt: "",
																									size: 130,
																							  }),
																					}),
																					Object(n.jsx)(we.a, {
																						id: "image",
																						type: "file",
																						name: "image",
																						accept: "image/*",
																						ref: k,
																						onChange: q,
																						value: O,
																						onBlur: o,
																					}),
																				],
																			}),
																			Object(n.jsx)(ye.a.Item, {
																				required: !0,
																				label: t("editProfile.prefLang"),
																				children: Object(n.jsxs)("select", {
																					defaultValue: M,
																					onChange: T,
																					children: [
																						Object(n.jsx)("option", {
																							value: "en-US",
																							children: t("navbar.lngEN"),
																						}),
																						Object(n.jsx)("option", {
																							value: "fr-FR",
																							children: t("navbar.lngFR"),
																						}),
																					],
																				}),
																			}),
																			Object(n.jsxs)(ye.a.Item, {
																				required: !0,
																				label: t("register.username"),
																				children: [
																					Object(n.jsx)(we.a, {
																						id: "username",
																						type: "text",
																						autoComplete: "username",
																						defaultValue: e.username,
																						onChange: c,
																						onBlur: o,
																						className:
																							r.username && i.username
																								? "text-input error"
																								: "text-input",
																					}),
																					r.username &&
																						i.username &&
																						Object(n.jsx)("div", {
																							className: "input-feedback",
																							children: r.username,
																						}),
																				],
																			}),
																			Object(n.jsxs)(ye.a.Item, {
																				required: !0,
																				label: t("register.firstName"),
																				children: [
																					Object(n.jsx)(we.a, {
																						id: "firstName",
																						type: "text",
																						defaultValue: e.firstName,
																						onChange: c,
																						onBlur: o,
																						className:
																							r.firstName && i.firstName
																								? "text-input error"
																								: "text-input",
																					}),
																					r.firstName &&
																						i.firstName &&
																						Object(n.jsx)("div", {
																							className: "input-feedback",
																							children: r.firstName,
																						}),
																				],
																			}),
																			Object(n.jsxs)(ye.a.Item, {
																				required: !0,
																				label: t("register.lastName"),
																				children: [
																					Object(n.jsx)(we.a, {
																						id: "lastName",
																						type: "text",
																						defaultValue: e.lastName,
																						onChange: c,
																						onBlur: o,
																						className:
																							r.lastName && i.lastName
																								? "text-input error"
																								: "text-input",
																					}),
																					r.lastName &&
																						i.lastName &&
																						Object(n.jsx)("div", {
																							className: "input-feedback",
																							children: r.lastName,
																						}),
																				],
																			}),
																			Object(n.jsxs)(ye.a.Item, {
																				required: !0,
																				label: t("register.email"),
																				children: [
																					Object(n.jsx)(we.a, {
																						id: "email",
																						type: "email",
																						autoComplete: "email",
																						defaultValue: e.email,
																						onChange: c,
																						onBlur: o,
																						className:
																							r.email && i.email
																								? "text-input error"
																								: "text-input",
																					}),
																					r.email &&
																						i.email &&
																						Object(n.jsx)("div", {
																							className: "input-feedback",
																							children: r.email,
																						}),
																				],
																			}),
																			Object(n.jsx)(
																				ye.a.Item,
																				Object(j.a)(
																					Object(j.a)({}, Jt),
																					{},
																					{
																						children: Object(n.jsx)(H.a, {
																							onClick: d,
																							type: "primary",
																							disabled: s,
																							children: t("editProfile.update"),
																						}),
																					}
																				)
																			),
																		],
																	}
																),
																e._id
															),
														}),
													],
												});
											},
										}),
										Object(n.jsx)("br", {}),
										Object(n.jsx)(Zt, {}),
									],
								},
								e._id
							);
					  })
					: Object(n.jsx)(L, {});
			};
			function Qt(e) {
				var t = Object(r.useState)(!1),
					a = Object(W.a)(t, 2),
					n = a[0],
					i = a[1],
					s = Object(E.a)().t;
				return (
					Object(r.useEffect)(
						function () {
							!n &&
								e &&
								e.match.params &&
								e.match.params.tokenConf &&
								(!(function () {
									var t;
									((t = e.match.params.tokenConf),
									x.a.get("".concat(_, "/confirmation/").concat(t), {
										headers: M,
									}))
										.then(function (t) {
											200 === t.status
												? (B.store.addNotification({
														message: s("login.activated"),
														insert: "top",
														type: "success",
														container: "top-right",
														animationIn: ["animated", "fadeIn"],
														animationOut: ["animated", "fadeOut"],
														dismiss: { duration: 5e3, onScreen: !0 },
												  }),
												  e.history.push("/login"))
												: (console.log("res status is : "),
												  B.store.addNotification({
														message: s("login.tokenFail"),
														insert: "top",
														type: "fail",
														container: "top-right",
														animationIn: ["animated", "fadeIn"],
														animationOut: ["animated", "fadeOut"],
														dismiss: { duration: 5e3, onScreen: !0 },
												  }));
										})
										.catch(function (e) {
											console.log(e);
										}),
										e.history.push("/login");
								})(),
								i(!0));
						},
						[e, n, s]
					),
					null
				);
			}
			var ea = a(116),
				ta = a(612),
				aa = a(613),
				na = a(600),
				ra = Object(Pe.a)(function (e) {
					return {
						loginContainer: { padding: "9em 0 0 0", margin: "auto" },
						paper: {
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							paddingTop: e.spacing(5),
						},
						login: {
							marginTop: "auto",
							backgroundColor: "rgba(250, 250, 250, 0.9)",
							borderRadius: "12px",
							padding: e.spacing(3),
						},
						signupButton: {
							margin: e.spacing(3, 0, 3, 0),
							borderRadius: "10px !important",
							color: "white",
						},
						textfield: { "& fieldset": { borderRadius: "10px !important" } },
						form: { width: "100%", marginTop: e.spacing(3) },
					};
				});
			function ia(e) {
				var t = ra(),
					a = Object(r.useState)(!0),
					s = Object(W.a)(a, 2),
					c = s[0],
					o = s[1],
					l = i.a.useState({ err_email: !1 }),
					d = Object(W.a)(l, 2),
					u = d[0],
					m = d[1],
					b = i.a.useState({ email: "" }),
					p = Object(W.a)(b, 2),
					h = p[0],
					g = p[1],
					f = Object(E.a)().t;
				function O(e) {
					return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
						String(e).toLowerCase()
					);
				}
				var v = function (t) {
					var a;
					t.preventDefault(),
						h && h.email && h.email.length && !O(h.email)
							? m({ err_email: f("reset.resetMailErr") })
							: O(h.email) && !u.err_email
							? ((a = h.email),
							  x.a.post(
									"".concat(_, "/forgotPassword"),
									{ email: a },
									{ headers: M }
							  ))
									.then(function (t) {
										200 === t.status &&
											B.store.addNotification({
												message: f("reset.resetMail"),
												insert: "top",
												type: "success",
												container: "top-right",
												animationIn: ["animated", "fadeIn"],
												animationOut: ["animated", "fadeOut"],
												dismiss: { duration: 5e3, onScreen: !0 },
											}),
											e.history.push("/login");
									})
									.catch(function () {
										m({ err_email: f("reset.resetMailErr") });
									})
							: m({ err_mail: f("reset.resetMailErr") });
				};
				return Object(n.jsx)("div", {
					className: "loginbg",
					children: Object(n.jsx)("div", {
						className: t.loginContainer,
						children: Object(n.jsx)(ta.a, {
							in: c,
							children: Object(n.jsx)(ht.a, {
								className: t.login,
								component: "main",
								maxWidth: "xs",
								children: Object(n.jsxs)("div", {
									className: t.paper,
									children: [
										Object(n.jsx)(xt.a, {
											component: "h1",
											variant: "h5",
											children: f("reset.forgotPassword"),
										}),
										Object(n.jsxs)("form", {
											className: t.form,
											onSubmit: v,
											noValidate: !0,
											children: [
												Object(n.jsx)(gt.a, {
													alignContent: "center",
													alignItems: "center",
													container: !0,
													spacing: 2,
													children: Object(n.jsx)(gt.a, {
														item: !0,
														xs: 12,
														children: Object(n.jsx)(aa.a, {
															variant: "outlined",
															required: !0,
															fullWidth: !0,
															id: "email",
															label: f("reset.email"),
															name: "email",
															autoComplete: "email",
															className: t.textfield,
															value: h.email || "",
															error: Boolean(u.err_email),
															helperText: u.err_email,
															onChange: function (e) {
																var t = u.err_email;
																"email" === e.target.id &&
																	t &&
																	m(
																		Object(j.a)(
																			Object(j.a)({}, u),
																			{},
																			{ err_email: !1 }
																		)
																	),
																	g(
																		Object(j.a)(
																			Object(j.a)({}, h),
																			{},
																			Object(ea.a)(
																				{},
																				e.target.id,
																				e.target.value
																			)
																		)
																	);
															},
														}),
													}),
												}),
												Object(n.jsx)(H.a, {
													size: "large",
													variant: "contained",
													color: "primary",
													type: "primary",
													className: t.signupButton,
													onClick: v,
													children: f("reset.sendMail"),
												}),
												Object(n.jsx)(gt.a, {
													container: !0,
													justify: "flex-end",
													children: Object(n.jsx)(gt.a, {
														item: !0,
														children: Object(n.jsx)(na.a, {
															onClick: function (t) {
																o(!c),
																	t.preventDefault(),
																	e.history.push("/register");
															},
															href: "#",
															variant: "body2",
															children: f("reset.account"),
														}),
													}),
												}),
											],
										}),
									],
								}),
							}),
						}),
					}),
				});
			}
			var sa = a(593),
				ca = Object(Pe.a)(function (e) {
					return {
						forgotContainer: { padding: "9em 0 0 0", margin: "auto" },
						paper: {
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							paddingTop: e.spacing(5),
						},
						login: {
							marginTop: "auto",
							background: "rgba(250, 250, 250, 0.9)",
							borderRadius: "12px",
							padding: e.spacing(3),
						},
						signupButton: {
							margin: e.spacing(3, 0, 3, 0),
							borderRadius: "10px !important",
							color: "white",
						},
						form: { width: "100%", marginTop: e.spacing(3) },
					};
				});
			function oa(e) {
				var t = ca(),
					a = Object(E.a)().t;
				var r = i.a.useState({ err_password: !1, err_password_confirm: !1 }),
					s = Object(W.a)(r, 2),
					c = s[0],
					o = s[1],
					l = i.a.useState({ password: "", password_confirm: "" }),
					d = Object(W.a)(l, 2),
					u = d[0],
					m = d[1],
					b = function (e) {
						var t = c.err_password,
							a = c.err_password_confirm;
						"password" === e.target.id &&
							t &&
							o(Object(j.a)(Object(j.a)({}, c), {}, { err_password: !1 })),
							"password_confirm" === e.target.id &&
								a &&
								o(Object(j.a)(Object(j.a)({}, c), {}, { err_password: !1 })),
							m(
								Object(j.a)(
									Object(j.a)({}, u),
									{},
									Object(ea.a)({}, e.target.id, e.target.value)
								)
							);
					},
					p = function (t) {
						t.preventDefault();
						var n,
							r = { password: !1, password_confirm: !1 };
						u.password.length || (r.password = a("reset.validUsername")),
							u.password !== u.password_confirm
								? (r.password_confirm = a("reset.passwordReq"))
								: ((n = u.password),
								  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(n) ||
										(r.password = a("reset.passwordweak"))),
							o({
								err_password: r.password,
								err_password_confirm: r.password_confirm,
							}),
							r.password ||
								r.password_confirm ||
								(function (e, t, a) {
									return x.a.post(
										"".concat(_, "/reset/").concat(e),
										{ tokenConf: e, password: t, password_confirm: a },
										{ headers: M }
									);
								})(e.match.params.tokenConf, u.password, u.password_confirm)
									.then(function (t) {
										200 === t.status &&
											(B.store.addNotification({
												message: a("reset.resetSuccess"),
												insert: "top",
												type: "success",
												container: "top-right",
												animationIn: ["animated", "fadeIn"],
												animationOut: ["animated", "fadeOut"],
												dismiss: { duration: 5e3, onScreen: !0 },
											}),
											console.log("GOOD"),
											e.history.push("/login"));
									})
									.catch(function (t) {
										t.response && t.response.data && t.response.data.errors
											? o({
													err_password: t.response.data.errors.password,
													err_password_confirm:
														t.response.data.errors.password_confirm,
											  })
											: (B.store.addNotification({
													message: a("reset.resetFail"),
													insert: "top",
													type: "danger",
													container: "top-right",
													animationIn: ["animated", "fadeIn"],
													animationOut: ["animated", "fadeOut"],
													dismiss: { duration: 5e3, onScreen: !0 },
											  }),
											  console.log("NOT GOOD"),
											  e.history.push("/login"));
									});
					};
				return Object(n.jsx)("div", {
					className: "loginbg",
					children: Object(n.jsx)("div", {
						className: t.forgotContainer,
						children: Object(n.jsx)(ta.a, {
							in: !0,
							children: Object(n.jsx)(ht.a, {
								className: t.login,
								component: "main",
								maxWidth: "xs",
								children: Object(n.jsxs)("div", {
									className: t.paper,
									children: [
										Object(n.jsx)(xt.a, {
											component: "h1",
											variant: "h5",
											children: a("reset.passwordReset"),
										}),
										Object(n.jsxs)("form", {
											className: t.form,
											onSubmit: p,
											noValidate: !0,
											children: [
												Object(n.jsx)(sa.a, {
													type: "text",
													name: "username",
													value: "",
													autoComplete: "username",
													style: { display: "none" },
												}),
												Object(n.jsxs)(gt.a, {
													alignContent: "center",
													alignItems: "center",
													container: !0,
													spacing: 2,
													children: [
														Object(n.jsx)(gt.a, {
															item: !0,
															xs: 12,
															children: Object(n.jsx)(aa.a, {
																onChange: b,
																helperText: c.err_password,
																error: Boolean(c.err_password),
																variant: "outlined",
																required: !0,
																fullWidth: !0,
																name: "password",
																label: a("reset.password"),
																type: "password",
																id: "password",
																autoComplete: "current-password",
															}),
														}),
														Object(n.jsx)(gt.a, {
															item: !0,
															xs: 12,
															children: Object(n.jsx)(aa.a, {
																value: u.password_confirm || "",
																helperText: c.err_password_confirm,
																error: Boolean(c.err_password_confirm),
																onChange: b,
																variant: "outlined",
																required: !0,
																fullWidth: !0,
																name: "password_confirm",
																label: a("reset.cpassword"),
																type: "password",
																id: "password_confirm",
																autoComplete: "current-password",
																className: t.textfield,
															}),
														}),
													],
												}),
												Object(n.jsx)(H.a, {
													size: "large",
													variant: "contained",
													type: "primary",
													color: "primary",
													className: t.signupButton,
													onClick: p,
													children: a("reset.resetButton"),
												}),
											],
										}),
									],
								}),
							}),
						}),
					}),
				});
			}
			var la = Y.a.Title,
				da = J.a.Meta;
			var ua = function () {
					var e = Object(E.a)().t,
						t = Object(r.useState)([]),
						a = Object(W.a)(t, 2),
						i = a[0],
						s = a[1],
						c = Object(r.useState)(!0),
						o = Object(W.a)(c, 2),
						l = o[0],
						d = o[1],
						u = Object(m.f)();
					Object(r.useEffect)(
						function () {
							x.a.get("/api/users/getUsers").then(function (e) {
								e.data.success ? (s(e.data.users), d(!1)) : u.push("/login");
							});
						},
						[u]
					);
					var j = i.map(function (e, t) {
						return Object(n.jsx)(
							$.a,
							{
								lg: 6,
								md: 8,
								xs: 24,
								children: Object(n.jsxs)(J.a, {
									hoverable: !0,
									style: {
										width: 240,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									},
									cover: Object(n.jsx)(Je.a, { src: e.image, size: 84 }),
									children: [
										Object(n.jsx)(da, { title: e.username }),
										Object(n.jsx)("br", {}),
										Object(n.jsxs)("span", {
											children: [e.firstName, " ", e.lastName],
										}),
									],
								}),
							},
							e._id
						);
					});
					return Object(n.jsxs)("div", {
						style: { width: "85%", margin: "3rem auto" },
						children: [
							Object(n.jsx)(la, { level: 2, children: e("users.usersTitle") }),
							Object(n.jsx)("hr", {}),
							Object(n.jsx)("br", {}),
							!l && Object(n.jsx)(V.a, { gutter: [16, 16], children: j }),
						],
					});
				},
				ma = function () {
					var e = Object(E.a)().t;
					return Object(n.jsxs)("div", {
						className: "not_found_container",
						children: [
							Object(n.jsx)("div", { children: e("notFound.sorry") }),
							Object(n.jsx)("div", { children: e("notFound.notfound") }),
						],
					});
				};
			var ja = function () {
				var e = Object(E.a)().t;
				return Object(n.jsxs)(r.Suspense, {
					fallback: e(Object(n.jsx)(L, {})),
					children: [
						Object(n.jsx)($e, {}),
						Object(n.jsxs)("div", {
							style: { paddingTop: "69px", minHeight: "calc(100vh - 80px)" },
							children: [
								Object(n.jsxs)("div", {
									className: "notifications",
									children: [" ", Object(n.jsx)(U.a, {}), " "],
								}),
								Object(n.jsxs)(m.c, {
									children: [
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/",
											component: q(ke, !1),
										}),
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/login",
											component: q(ke, !1),
										}),
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/landing",
											component: q(ge, !0),
										}),
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/landing/genre/:genreName/:genreId",
											component: q(fe, !0),
										}),
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/register",
											component: q(Te, !1),
										}),
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/movie/:movieId",
											component: q(At, !0),
										}),
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/favorite",
											component: q(Yt, !0),
										}),
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/profile",
											component: q(Kt, !0),
										}),
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/users",
											component: q(ua, !0),
										}),
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/forgot",
											component: q(ia, !1),
										}),
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/confirmation/:tokenConf",
											component: q(Qt, !1),
										}),
										Object(n.jsx)(m.a, {
											exact: !0,
											path: "/confirmation/ResetPassword/Reset/:tokenConf",
											component: q(oa, !1),
										}),
										Object(n.jsx)(m.a, { component: q(ma, null) }),
									],
								}),
							],
						}),
						Object(n.jsx)(Ze, {}),
					],
				});
			};
			Boolean(
				"localhost" === window.location.hostname ||
					"[::1]" === window.location.hostname ||
					window.location.hostname.match(
						/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
					)
			);
			var ba = a(103);
			var pa = Object(ba.c)({
					user: function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: {},
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case O:
								return Object(j.a)(
									Object(j.a)({}, e),
									{},
									{ register: t.payload }
								);
							case v:
								return Object(j.a)(
									Object(j.a)({}, e),
									{},
									{ update: t.payload }
								);
							case f:
								return Object(j.a)(
									Object(j.a)({}, e),
									{},
									{ loginSucces: t.payload }
								);
							case y:
								return Object(j.a)(
									Object(j.a)({}, e),
									{},
									{ userData: t.payload }
								);
							case w:
								return Object(j.a)({}, e);
							default:
								return e;
						}
					},
				}),
				ha = a(297),
				ga = a.n(ha),
				xa = a(298),
				fa = Object(ba.a)(ga.a, xa.a)(ba.d);
			u.a.render(
				Object(n.jsx)(z.a, {
					store: fa(
						pa,
						window.__REDUX_DEVTOOLS_EXTENSION__ &&
							window.__REDUX_DEVTOOLS_EXTENSION__()
					),
					children: Object(n.jsx)(oe.a, {
						children: Object(n.jsx)(r.Suspense, {
							fallback: Object(n.jsx)(L, {}),
							children: Object(n.jsx)(ja, {}),
						}),
					}),
				}),
				document.getElementById("root")
			),
				"serviceWorker" in navigator &&
					navigator.serviceWorker.ready
						.then(function (e) {
							e.unregister();
						})
						.catch(function (e) {
							console.error(e.message);
						});
		},
	},
	[[553, 1, 2]],
]);
//# sourceMappingURL=main.1435fcbf.chunk.js.map
