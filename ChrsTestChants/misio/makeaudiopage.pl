

use strict;
my $header=qq( <!DOCTYPE html>
<html lang="">
<head>
<!-- file made by $0 -->
    <meta charset="utf-8">
    <title>MisioSutra</title>
    <meta name="author" content="Your Name">
    <meta name="description" content="Example description">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="">
    <link rel="icon" type="image/x-icon" href=""/>
</head>
<body>
    <header>Sanskrit Sutras</header>
    <main>);

my $footer =qq(    </main>
    <footer></footer>
    <script type="text/javascript" src=""></script>
</body></html>);

my %number_sutra=qw(
     31068 kartarizap
     32123 vartamAnelaT
     24072 adiprabhRtibhyazzapaH
     71003 jhontaH
     61077 ikoyaNaci
);
$,=" ";
$\="\n";

open OUT, ">testhtml.html" or die;
select OUT;

print $header;
for my $number(sort keys %number_sutra){
    my $sutra=$number_sutra{$number};
        $_=$number;
        s/(\d)(\d)(\d\d\d)/sprintf "%d-%d-%d", $1, $2, $3/es;
        print qq(<p>$sutra <a href="http://sanskritdictionary.com/panini/$_">$number</a></p>        
<p><audio controls><source src="$sutra.mp3" type="audio/ogg"></audio></p>);
}
print $footer;
