Ω('main-wrapper').register(div);
Ω('head-wrap').register(div);
Ω('body-wrap').register(div);
Ω('foot-wrap').register(div);
Ω('quote-1').register(h1); 
Ω('topic-head').register(h1); 
Ω('topic-desc').register(h1); 
Ω('normal-list').register(ul); 
Ω('list-item').register(li);
new fullpage('#main-wrapper', {
   autoScrolling: true,
   navigation: true,
   controlArrows: true
});