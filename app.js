$(".scroll-top").click(()=>{
  $("html").animate(
    {
      scrollTop: $('body').offset().top
    },
    "slow"
  );
});

$(".01").click(()=>{
  $("html").animate(
    {
      scrollTop: $('#letter').offset().top
    },
    "slow"
  );
});

$(".02").click(()=>{
  $("html").animate(
    {
      scrollTop: $('#survey').offset().top
    },
    "slow"
  );
});

$(".03").click(()=>{
  $("html").animate(
    {
      scrollTop: $('#demands').offset().top
    },
    "slow"
  );
});

$(".04").click(()=>{
  $("html").animate(
    {
      scrollTop: $('#reviews').offset().top
    },
    "slow"
  );
});

$(".05").click(()=>{
  $("html").animate(
    {
      scrollTop: $('#cta').offset().top
    },
    "slow"
  );
});
