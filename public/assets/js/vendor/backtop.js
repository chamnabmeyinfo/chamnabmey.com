$(document).ready(function () {
    "use strict";

    // Select the progress path element
    var $progressPath = $(".scrollToTop path");

    // Check if the path element is found
    if ($progressPath.length === 0) {
      return; // Exit cleanly if the path element does not exist on this page
    }

    // Access the raw DOM element
    var progressPath = $progressPath[0];

    // Check if the element is actually available
    if (!progressPath) {
      return;
    }

    // Get the length of the path
    var pathLength;
    try {
      pathLength = progressPath.getTotalLength();
    } catch (e) {
      return;
    }

    // Initialize progress path styles
    $(progressPath).css({
      transition: "none",
      WebkitTransition: "none",
      strokeDasharray: pathLength + " " + pathLength,
      strokeDashoffset: pathLength,
    });

    // Force browser to recalculate
    progressPath.getBoundingClientRect();

    // Set up the transition
    $(progressPath).css({
      transition: "stroke-dashoffset 10ms linear",
      WebkitTransition: "stroke-dashoffset 10ms linear",
    });

    // Function to update the progress path based on scroll
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      $(progressPath).css("strokeDashoffset", progress);
    };

    // Initial update
    updateProgress();

    // Update progress on scroll
    $(window).scroll(updateProgress);

    // Offset and duration for scroll-to-top button
    var offset = 50;
    var duration = 550;

    // Show or hide the progress wrap based on scroll position
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $(".scrollToTop").addClass("active-progress");
        $(".tmp-ready-chat").addClass("chat-visible");
      } else {
        $(".scrollToTop").removeClass("active-progress");
        $(".tmp-ready-chat").removeClass("chat-visible");
      }
    });

    // Scroll to top on progress wrap click
    $(".scrollToTop").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });