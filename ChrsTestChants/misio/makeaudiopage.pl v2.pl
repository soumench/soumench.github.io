
use strict;

my $HTMLFILENAME="chantedsutras.html";
my $title=qq(pAnini sUtras chanted by Soumen Chakraborti);

my $header=qq( <!DOCTYPE html>
<html><head>
<!-- file made by $0 -->
    <meta charset="utf-8">
    <title>$title</title>
    <meta name="author" content="Soumen Chakraborti">
    <meta name="description" content="some pAnini sUtras chanted by Soumen Chakraborti">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sutraaudio.css">
    <link rel="icon" type="image/x-icon" href=""/>
</head>
<body>    <main><h1>$title</h1>
);

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
     61097 atoguNe
     31069 divAdibhyazzyan
);

my %moresutras = qw (          
     11001 vRddhirAdaic
     11002 adeGguNaH
     61087 AdguNaH
     61088 vRddhireci          
     34077 lasya
);

$,=" ";
$\="\n";

open OUT, ">$HTMLFILENAME" or die;
select OUT;

print $header;
for my $number(sort keys %number_sutra){
    my $sutra=$number_sutra{$number};
        my $numberwithhyphens=$number;
        $numberwithhyphens =~ s/(\d)(\d)(\d\d\d)/sprintf "%d-%d-%d", $1, $2, $3/es;        
        $_=qq(<p><a href="http://sanskritdictionary.com/panini/$numberwithhyphens">$number</a> $sutra );

        
        my $gram="$sutra.jpg";
        my $audio="$sutra.mp3";
        
        if(-e $gram){
            $_.=qq(<img src="$gram" alt="" width="" height="" class="spec"> );
        }else{
            $_ .=" (gram file $gram is missing) "
        }
        
        if( -e $audio){
            $_.=qq(<audio controls><source src="$audio" type="audio/ogg"></audio>) ;            
        }else{
            $_ .=" (audio file $audio is missing) "        
        }        
        print "$_</p>";
}
print $footer;
