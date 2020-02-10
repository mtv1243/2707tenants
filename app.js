$(".scroll-top").click(()=>{
  $("html").animate(
    {
      scrollTop: $('body').offset().top
    },
    "slow"
  );
});

$(".02").click(()=>{
  $("html").animate(
    {
      scrollTop: $('.form').offset().top
    },
    "slow"
  );
});

$(".03").click(()=>{
  $("html").animate(
    {
      scrollTop: $('.resources').offset().top
    },
    "slow"
  );
});
