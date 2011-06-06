$(document).ready(function() {
    $("#menu-puzzle-00").hover(
        function() { $("#text-requirements").css('font-weight', 'bold');},
        function() { $("#text-requirements").css('font-weight', '400');	}
    );

    $("#menu-puzzle-01").hover(
        function() { $("#text-execute").css('font-weight', 'bold');},
        function() { $("#text-execute").css('font-weight', '400');}
    );

    $("#menu-puzzle-10").hover(
        function() { $("#text-store").css('font-weight', 'bold');},
        function() { $("#text-store").css('font-weight', '400');}
    );

    $("#menu-puzzle-11").hover(
        function() { $("#text-report").css('font-weight', 'bold');},
        function() { $("#text-report").css('font-weight', '400');}
    );
});