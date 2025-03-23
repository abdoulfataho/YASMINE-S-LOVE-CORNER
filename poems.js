const poems = [
    {
        id: 1,
        title: "How Do I Love Thee?",
        author: "Elizabeth Barrett Browning",
        english: `How do I love thee? Let me count the ways.
I love thee to the depth and breadth and height
My soul can reach, when feeling out of sight
For the ends of being and ideal grace.`,
        french: `Comment t'aimé-je ? Laisse-moi compter les façons.
Je t'aime jusqu'à la profondeur, la largeur et la hauteur
Que mon âme peut atteindre, quand je cherche à voir
Les limites de l'être et la grâce idéale.`
    },
    {
        id: 2,
        title: "She Walks in Beauty",
        author: "Lord Byron",
        english: `She walks in beauty, like the night
Of cloudless climes and starry skies;
And all that's best of dark and bright
Meet in her aspect and her eyes.`,
        french: `Elle marche dans la beauté, comme la nuit
Des climats sans nuages et des cieux étoilés;
Et tout ce qu'il y a de meilleur dans l'obscur et le lumineux
Se rencontre dans son aspect et ses yeux.`
    },
    {
        id: 3,
        title: "Love's Philosophy",
        author: "Percy Bysshe Shelley",
        english: `The fountains mingle with the river
And the rivers with the ocean,
The winds of heaven mix forever
With a sweet emotion.`,
        french: `Les fontaines se mêlent à la rivière
Et les rivières à l'océan,
Les vents du ciel se mélangent pour toujours
Avec une douce émotion.`
    },
    {
        id: 4,
        title: "Sonnet 43",
        author: "Pablo Neruda",
        english: `I love you without knowing how, or when, or from where.
I love you simply, without problems or pride:
I love you in this way because I do not know any other way of loving
But this, in which there is no I or you.`,
        french: `Je t'aime sans savoir comment, ni quand, ni d'où.
Je t'aime simplement, sans problèmes ni fierté:
Je t'aime ainsi car je ne connais pas d'autre façon d'aimer
Que celle-ci, où il n'y a ni moi ni toi.`
    },
    {
        id: 5,
        title: "A Red, Red Rose",
        author: "Robert Burns",
        english: `O my Luve is like a red, red rose
That's newly sprung in June;
O my Luve is like the melody
That's sweetly played in tune.`,
        french: `Ô mon Amour est comme une rose rouge, rouge
Qui vient d'éclore en juin;
Ô mon Amour est comme la mélodie
Qui est doucement jouée en harmonie.`
    },
    {
        id: 6,
        title: "Bright Star",
        author: "John Keats",
        english: `Bright star, would I were stedfast as thou art—
Not in lone splendour hung aloft the night
And watching, with eternal lids apart,
Like nature's patient, sleepless Eremite.`,
        french: `Étoile brillante, si je pouvais être constant comme toi—
Non pas dans la splendeur solitaire suspendue dans la nuit
Et regardant, les paupières éternellement écartées,
Comme l'ermite patient et sans sommeil de la nature.`
    },
    {
        id: 7,
        title: "Love One Another",
        author: "Khalil Gibran",
        english: `Love one another, but make not a bond of love:
Let it rather be a moving sea between the shores of your souls.
Fill each other's cup but drink not from one cup.`,
        french: `Aimez-vous l'un l'autre, mais ne faites pas une chaîne de l'amour:
Qu'il soit plutôt une mer mouvante entre les rives de vos âmes.
Remplissez la coupe l'un de l'autre mais ne buvez pas à la même coupe.`
    },
    {
        id: 8,
        title: "The Dream",
        author: "Victor Hugo",
        english: `If there is a lovely garden somewhere,
With flowers made of dawn's light,
Where love waits, forever fair,
That's where I want to take you tonight.`,
        french: `S'il existe un charmant jardin,
Fait de fleurs de lumière d'aube,
Où l'amour attend, toujours beau,
C'est là que je veux t'emmener ce soir.`
    },
    {
        id: 9,
        title: "When I Think of You",
        author: "Rumi",
        english: `When I think of you, the world grows light,
My soul takes flight like a bird at dawn.
In the garden of love, where we unite,
Every shadow of sorrow is gone.`,
        french: `Quand je pense à toi, le monde s'illumine,
Mon âme s'envole comme un oiseau à l'aube.
Dans le jardin de l'amour, où nous nous unissons,
Chaque ombre de chagrin disparaît.`
    },
    {
        id: 10,
        title: "Sonnet 18",
        author: "William Shakespeare",
        english: `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date.`,
        french: `Dois-je te comparer à un jour d'été ?
Tu es plus belle et plus tempérée :
Les vents violents secouent les chers bourgeons de mai,
Et le bail de l'été est bien trop court.`
    },
    {
        id: 11,
        title: "The Awakening",
        author: "Paul Éluard",
        english: `My love, my beautiful love of all my mornings,
My first, my second, my eternal love,
My day, my night, my song, my light dawning,
My earth and sky sent from stars above.`,
        french: `Mon amour, mon bel amour de tous mes matins,
Mon premier, mon second, mon éternel amour,
Mon jour, ma nuit, ma chanson, ma lumière naissante,
Ma terre et mon ciel envoyés des étoiles.`
    },
    {
        id: 12,
        title: "Forever",
        author: "Emily Dickinson",
        english: `Forever is composed of nows—
'Tis not afar to thee,
And when they cease to be
Then love shall be no more.`,
        french: `L'éternité est composée d'instants présents—
Ce n'est pas loin de toi,
Et quand ils cesseront d'être
Alors l'amour ne sera plus.`
    },
    {
        id: 13,
        title: "The Meeting",
        author: "Louis Aragon",
        english: `I did not know you, had not seen your face,
Yet something in my heart had always known
That we would meet in this enchanted place
Where love would claim us for its own.`,
        french: `Je ne te connaissais pas, n'avais pas vu ton visage,
Pourtant quelque chose dans mon cœur avait toujours su
Que nous nous rencontrerions dans cet endroit enchanté
Où l'amour nous réclamerait pour sien.`
    },
    {
        id: 14,
        title: "Love's Coming",
        author: "Ella Wheeler Wilcox",
        english: `She had looked for his coming as warriors come,
With the clash of arms and the bugle's call;
But he came instead with a stealthy tread,
Which she did not hear at all.`,
        french: `Elle avait attendu sa venue comme viennent les guerriers,
Avec le fracas des armes et l'appel du clairon ;
Mais il est venu à pas feutrés,
Qu'elle n'entendit point du tout.`
    },
    {
        id: 15,
        title: "The Heart's Secret",
        author: "Charles Baudelaire",
        english: `My heart, like a bird, would fly to you,
Sweet home where tender dreams reside;
To you, bright star in heaven's blue,
My thoughts at evening softly glide.`,
        french: `Mon cœur, comme un oiseau, volerait vers toi,
Doux foyer où résident les tendres rêves ;
Vers toi, brillante étoile dans le bleu du ciel,
Mes pensées le soir doucement glissent.`
    },
    {
        id: 16,
        title: "First Love",
        author: "John Clare",
        english: `I ne'er was struck before that hour
With love so sudden and so sweet,
Her face it bloomed like a sweet flower
And stole my heart away complete.`,
        french: `Je ne fus jamais frappé avant cette heure
D'un amour si soudain et si doux,
Son visage fleurissait comme une douce fleur
Et vola mon cœur tout entier.`
    },
    {
        id: 17,
        title: "Evening Star",
        author: "Edgar Allan Poe",
        english: `'Twas noontide of summer,
And mid-time of night;
And stars, in their orbits,
Shone pale, through the light.`,
        french: `C'était le midi de l'été,
Et le milieu de la nuit ;
Et les étoiles, dans leurs orbites,
Brillaient pâles, à travers la lumière.`
    },
    {
        id: 18,
        title: "Love's Language",
        author: "Ella Wheeler Wilcox",
        english: `How does Love speak?
In the faint flush upon the telltale cheek,
And in the pallor that succeeds it; by
The quivering lid of an averted eye.`,
        french: `Comment parle l'Amour ?
Dans la faible rougeur sur la joue révélatrice,
Et dans la pâleur qui lui succède ; par
La paupière tremblante d'un œil détourné.`
    },
    {
        id: 19,
        title: "The Rose of Love",
        author: "Pierre de Ronsard",
        english: `See, Mignonne, hath not the Rose,
That this morning did unclose
Her purple mantle to the light,
Lost, before the day be dead,
The glory of her raiment red,
Her color, bright as yours is bright?`,
        french: `Vois, Mignonne, n'a pas la Rose,
Qui ce matin avait déclose
Son manteau pourpre à la lumière,
Perdu, avant la fin du jour,
La gloire de sa robe rouge,
Sa couleur, brillante comme la vôtre ?`
    },
    {
        id: 20,
        title: "Love's Warmth",
        author: "Christina Rossetti",
        english: `My heart is like a singing bird
Whose nest is in a water'd shoot;
My heart is like an apple-tree
Whose boughs are bent with thickset fruit.`,
        french: `Mon cœur est comme un oiseau chantant
Dont le nid est dans une pousse arrosée ;
Mon cœur est comme un pommier
Dont les branches ploient sous les fruits serrés.`
    },
    {
        id: 21,
        title: "Eternal Love",
        author: "Paul Verlaine",
        english: `The white moon shines in the forest,
From every branch comes forth a voice,
Under the foliage, oh beloved...
The pond reflects, deep mirror,
The silhouette of the black willow
Where the wind is weeping.`,
        french: `La lune blanche luit dans les bois,
De chaque branche part une voix,
Sous la ramée, ô bien-aimée...
L'étang reflète, profond miroir,
La silhouette du saule noir
Où le vent pleure.`
    },
    {
        id: 22,
        title: "Love's Dawn",
        author: "Alfred de Musset",
        english: `I love you as one loves the morning star,
With pure delight and deep serenity,
As one loves springtime and the clear blue sky,
Because you are my heart's bright avatar.`,
        french: `Je t'aime comme on aime l'étoile du matin,
Avec un pur délice et une profonde sérénité,
Comme on aime le printemps et le ciel bleu clair,
Parce que tu es l'avatar lumineux de mon cœur.`
    },
    {
        id: 23,
        title: "The Love Letter",
        author: "Marceline Desbordes-Valmore",
        english: `If he should come to see me, what shall I say?
My heart will speak with words I do not know.
If he should ask me why I turned away,
What can I answer, since I love him so?`,
        french: `S'il vient me voir, que dirais-je ?
Mon cœur parlera avec des mots que je ne connais pas.
S'il me demande pourquoi je me suis détournée,
Que puis-je répondre, puisque je l'aime tant ?`
    },
    {
        id: 24,
        title: "Love's Whisper",
        author: "Arthur Rimbaud",
        english: `I have dreamed of the green night with dazzled snows,
Of kisses rising slowly in the eyes of the sea,
Of the circulation of unknown saps,
And the yellow and blue awakening of singing phosphorus.`,
        french: `J'ai rêvé la nuit verte aux neiges éblouies,
Des baisers montant lentement dans les yeux des mers,
De la circulation des sèves inconnues,
Et du réveil jaune et bleu des phosphores chantants.`
    },
    {
        id: 25,
        title: "Love's Eternity",
        author: "Victor Hugo",
        english: `When two hearts in love unite,
God smiles in heaven above,
For nothing in His blessed sight
Is holier than love.`,
        french: `Quand deux cœurs amoureux s'unissent,
Dieu sourit dans le ciel là-haut,
Car rien sous Son regard béni
N'est plus sacré que l'amour.`
    },
    {
        id: 26,
        title: "The Promise",
        author: "Anne Brontë",
        english: `The moon is full this winter night;
The stars are clear, though few;
And every window glistens bright,
With leaves of frozen dew.`,
        french: `La lune est pleine cette nuit d'hiver;
Les étoiles sont claires, bien que peu nombreuses;
Et chaque fenêtre brille intensément,
Avec des feuilles de rosée gelée.`
    },
    {
        id: 27,
        title: "Love's Silence",
        author: "Paul Valéry",
        english: `In the silence of my love,
I hear your heart beating,
Like a distant drum above
Time's endless fleeting.`,
        french: `Dans le silence de mon amour,
J'entends ton cœur qui bat,
Comme un tambour lointain au-dessus
De l'éternel passage du temps.`
    },
    {
        id: 28,
        title: "The Garden of Love",
        author: "William Blake",
        english: `I went to the Garden of Love,
And saw what I never had seen:
A Chapel was built in the midst,
Where I used to play on the green.`,
        french: `Je suis allé au Jardin de l'Amour,
Et j'ai vu ce que je n'avais jamais vu:
Une Chapelle était construite au milieu,
Là où je jouais autrefois sur l'herbe.`
    },
    {
        id: 29,
        title: "Eternal Moment",
        author: "Charles Baudelaire",
        english: `Be always drunken, nothing else matters:
That is your only concern.
But be drunken with Love, with Poetry,
With virtue, as you please.`,
        french: `Soyez toujours ivre, rien d'autre n'importe:
C'est là votre seul souci.
Mais soyez ivre d'Amour, de Poésie,
De vertu, comme il vous plaît.`
    },
    {
        id: 30,
        title: "Love's Memory",
        author: "Alfred de Musset",
        english: `Remember me when timid Dawn
Opens her gates to the Sun,
Remember me when dreamy Night
Dresses in her silver gown.`,
        french: `Souviens-toi de moi quand l'Aube timide
Ouvre ses portes au Soleil,
Souviens-toi de moi quand la Nuit rêveuse
Revêt sa robe d'argent.`
    },
    {
        id: 31,
        title: "The First Kiss",
        author: "Gérard de Nerval",
        english: `The first kiss came softly
Like a gentle morning breeze,
Awakening my heart slowly
To love's sweet mysteries.`,
        french: `Le premier baiser est venu doucement
Comme une brise matinale légère,
Éveillant mon cœur lentement
Aux doux mystères de l'amour.`
    },
    {
        id: 32,
        title: "Love's Dance",
        author: "Arthur Rimbaud",
        english: `We danced in dreams of gold and light,
Our hearts beating as one,
Through endless days and starlit nights,
Until time was undone.`,
        french: `Nous dansions dans des rêves d'or et de lumière,
Nos cœurs battant à l'unisson,
À travers des jours sans fin et des nuits étoilées,
Jusqu'à ce que le temps soit défait.`
    },
    {
        id: 33,
        title: "The Lover's Path",
        author: "Paul Verlaine",
        english: `Through shadow and through light I go,
Seeking the path to your heart,
Where love's eternal flowers grow,
Never to part.`,
        french: `À travers l'ombre et la lumière je vais,
Cherchant le chemin vers ton cœur,
Où poussent les fleurs éternelles de l'amour,
Pour ne jamais se séparer.`
    },
    {
        id: 34,
        title: "Morning Love",
        author: "Emily Dickinson",
        english: `Morning's first light brings thoughts of you,
Like dewdrops fresh and clear,
Each ray of sun reminds me true
Of one I hold so dear.`,
        french: `La première lumière du matin m'apporte des pensées de toi,
Comme des gouttes de rosée fraîches et claires,
Chaque rayon de soleil me rappelle vraiment
Celui que je tiens si cher.`
    },
    {
        id: 35,
        title: "Love's Seasons",
        author: "Percy Bysshe Shelley",
        english: `In spring our love was morning dew,
In summer bright as day,
In autumn rich as harvest gold,
In winter pure as snow's display.`,
        french: `Au printemps notre amour était rosée matinale,
En été brillant comme le jour,
En automne riche comme l'or des moissons,
En hiver pur comme l'éclat de la neige.`
    },
    {
        id: 36,
        title: "The Heart's Journey",
        author: "Christina Rossetti",
        english: `My heart is like a wandering dove
That seeks its home above;
Through storm and shine it flies to thee,
Guided by love.`,
        french: `Mon cœur est comme une colombe errante
Qui cherche sa maison là-haut ;
À travers tempête et soleil il vole vers toi,
Guidé par l'amour.`
    },
    {
        id: 37,
        title: "Eternal Spring",
        author: "Pablo Neruda",
        english: `I love you as spring loves the flowers,
As night loves the stars above,
As morning loves the gentle showers,
With pure, unending love.`,
        french: `Je t'aime comme le printemps aime les fleurs,
Comme la nuit aime les étoiles là-haut,
Comme le matin aime les douces averses,
D'un amour pur et sans fin.`
    },
    {
        id: 38,
        title: "Love's Light",
        author: "Elizabeth Barrett Browning",
        english: `The face of all the world is changed, I think,
Since first I heard the footsteps of thy soul
Move still, oh, still, beside me, as they stole
Betwixt me and the dreadful outer brink.`,
        french: `Le visage du monde entier a changé, je crois,
Depuis que j'ai entendu les premiers pas de ton âme
Bouger encore, oh, encore, à mes côtés, comme ils se glissaient
Entre moi et le terrible bord extérieur.`
    },
    {
        id: 39,
        title: "The Heart's Song",
        author: "William Wordsworth",
        english: `She was a phantom of delight
When first she gleamed upon my sight;
A lovely apparition, sent
To be a moment's ornament.`,
        french: `Elle était un fantôme de délice
Quand elle brilla pour la première fois à ma vue ;
Une charmante apparition, envoyée
Pour être l'ornement d'un instant.`
    },
    {
        id: 40,
        title: "Love's Dream",
        author: "John Keats",
        english: `Love in a hut, with water and a crust,
Is—Love, forgive us!—cinders, ashes, dust;
Love in a palace is perhaps at last
More grievous torment than a hermit's fast.`,
        french: `L'amour dans une hutte, avec de l'eau et une croûte,
Est—Amour, pardonne-nous !—cendres, cendres, poussière ;
L'amour dans un palais est peut-être enfin
Un tourment plus pénible que le jeûne d'un ermite.`
    },
    {
        id: 41,
        title: "The Quiet Love",
        author: "Sara Teasdale",
        english: `There is a quiet way of loving
That speaks in silence clear and deep,
Like gentle rain on sleeping roses,
Like stars that guard a lover's sleep.`,
        french: `Il y a une façon tranquille d'aimer
Qui parle dans un silence clair et profond,
Comme une douce pluie sur des roses endormies,
Comme des étoiles qui gardent le sommeil d'un amoureux.`
    },
    {
        id: 42,
        title: "Love's Wisdom",
        author: "Kahlil Gibran",
        english: `Love gives naught but itself
And takes naught but from itself.
Love possesses not
Nor would it be possessed.`,
        french: `L'amour ne donne que lui-même
Et ne prend que de lui-même.
L'amour ne possède pas
Et ne voudrait pas être possédé.`
    },
    {
        id: 43,
        title: "The Heart's Garden",
        author: "Rabindranath Tagore",
        english: `Love planted a rose,
And the world turned sweet.
Hope planted a heart,
And joy took root.`,
        french: `L'amour a planté une rose,
Et le monde est devenu doux.
L'espoir a planté un cœur,
Et la joie a pris racine.`
    },
    {
        id: 44,
        title: "Eternal Bond",
        author: "Robert Frost",
        english: `Two roads diverged in a wood, and I—
I took the one where love might lie,
And that has made all difference here,
In how I live and hold you dear.`,
        french: `Deux chemins divergeaient dans un bois, et moi—
J'ai pris celui où l'amour pouvait se trouver,
Et cela a fait toute la différence ici,
Dans ma façon de vivre et de te chérir.`
    },
    {
        id: 45,
        title: "Love's Morning",
        author: "Walt Whitman",
        english: `This is what you shall do:
Love the earth and sun and animals,
Despise riches, give alms to everyone that asks,
Stand up for the stupid and crazy.`,
        french: `Voici ce que tu dois faire :
Aimer la terre et le soleil et les animaux,
Mépriser les richesses, faire l'aumône à tous ceux qui demandent,
Défendre les stupides et les fous.`
    },
    {
        id: 46,
        title: "The Heart's Voice",
        author: "Federico García Lorca",
        english: `The night did not want to come
So that you and I could not meet.
But we will meet in secret,
In the darkness of your look.`,
        french: `La nuit ne voulait pas venir
Pour que toi et moi ne puissions pas nous rencontrer.
Mais nous nous rencontrerons en secret,
Dans l'obscurité de ton regard.`
    },
    {
        id: 47,
        title: "Love's Echo",
        author: "Oscar Wilde",
        english: `We are all in the gutter,
But some of us are looking at the stars.
Love lifts us from the shadows deep,
To where the light of heaven starts.`,
        french: `Nous sommes tous dans le caniveau,
Mais certains d'entre nous regardent les étoiles.
L'amour nous élève des ombres profondes,
Jusqu'où commence la lumière du ciel.`
    },
    {
        id: 48,
        title: "The Eternal Dance",
        author: "Rainer Maria Rilke",
        english: `Again and again, even though we know love's landscape
And the little churchyard with its lamenting names
And the terrible reticent gorge in which the others
End: again and again the two of us walk out together.`,
        french: `Encore et encore, même si nous connaissons le paysage de l'amour
Et le petit cimetière avec ses noms lamentables
Et la terrible gorge réticente où les autres
Finissent : encore et encore nous sortons ensemble.`
    },
    {
        id: 49,
        title: "Love's Truth",
        author: "e.e. cummings",
        english: `i carry your heart with me(i carry it in
my heart)i am never without it(anywhere
i go you go,my dear;and whatever is done
by only me is your doing,my darling)`,
        french: `je porte ton cœur avec moi(je le porte dans
mon cœur)je ne suis jamais sans lui(où que
j'aille tu vas,ma chérie;et tout ce qui est fait
par moi seul est ton fait,ma bien-aimée)`
    },
    {
        id: 50,
        title: "The Final Love",
        author: "Paul Éluard",
        english: `There is another world, but it is in this one.
There is another love, but it lives in this love.
There is another time, but it beats in this moment.
There is another life, but it breathes in this breath.`,
        french: `Il y a un autre monde, mais il est dans celui-ci.
Il y a un autre amour, mais il vit dans cet amour.
Il y a un autre temps, mais il bat dans cet instant.
Il y a une autre vie, mais elle respire dans ce souffle.`
    }
,
    {
        id: 51,
        title: "Love's Morning Light",
        author: "Mary Oliver",
        english: `Every morning the world
is created anew.
And I think of you,
as the light spreads east to west.`,
        french: `Chaque matin le monde
est créé à nouveau.
Et je pense à toi,
tandis que la lumière s'étend d'est en ouest.`
    },
    {
        id: 52,
        title: "The Heart's Compass",
        author: "Octavio Paz",
        english: `Between going and staying
the day wavers,
in love with its own transparency.
The circular afternoon is now a bay
where the world in stillness rocks.`,
        french: `Entre partir et rester
le jour hésite,
amoureux de sa propre transparence.
L'après-midi circulaire est maintenant une baie
où le monde se balance dans la tranquillité.`
    },
    {
        id: 53,
        title: "Love's Infinity",
        author: "William Butler Yeats",
        english: `Had I the heavens' embroidered cloths,
Enwrought with golden and silver light,
The blue and the dim and the dark cloths
Of night and light and the half-light.`,
        french: `Si j'avais les tissus brodés des cieux,
Tissés de lumière d'or et d'argent,
Les tissus bleus et sombres et obscurs
De la nuit et de la lumière et de la pénombre.`
    },
    {
        id: 54,
        title: "Eternal Spring",
        author: "Jacques Prévert",
        english: `In my heart's garden
Blooms an eternal spring,
Where your love grows
Like wildflowers in the wind.`,
        french: `Dans le jardin de mon cœur
Fleurit un printemps éternel,
Où ton amour pousse
Comme des fleurs sauvages dans le vent.`
    },
    {
        id: 55,
        title: "Love's Symphony",
        author: "Paul Verlaine",
        english: `Your voice is like
A distant melody,
That echoes through
The chambers of my heart.`,
        french: `Ta voix est comme
Une mélodie lointaine,
Qui résonne à travers
Les chambres de mon cœur.`
    },
    {
        id: 56,
        title: "The Soul's Dance",
        author: "Federico García Lorca",
        english: `Under the orange grove,
Love dances with the wind,
While the stars above
Watch our souls rescind.`,
        french: `Sous le bosquet d'orangers,
L'amour danse avec le vent,
Tandis que les étoiles au-dessus
Regardent nos âmes s'abandonner.`
    },
    {
        id: 57,
        title: "Love's Whispers",
        author: "Anna Akhmatova",
        english: `I hear your voice in every breeze,
In every rustle of the trees,
In every wave upon the shore,
In every bird's song, and more.`,
        french: `J'entends ta voix dans chaque brise,
Dans chaque bruissement des arbres,
Dans chaque vague sur le rivage,
Dans chaque chant d'oiseau, et plus encore.`
    },
    {
        id: 58,
        title: "The Heart's Journey",
        author: "Rumi",
        english: `The moment I heard my first love story,
I started looking for you,
Not knowing how blind that was.
Lovers don't finally meet somewhere,
They're in each other all along.`,
        french: `Le moment où j'ai entendu ma première histoire d'amour,
J'ai commencé à te chercher,
Sans savoir combien c'était aveugle.
Les amoureux ne se rencontrent pas finalement quelque part,
Ils sont l'un dans l'autre depuis toujours.`
    },
    {
        id: 59,
        title: "Love's Dawn",
        author: "Pablo Neruda",
        english: `I love you between shadow and soul,
Between the scent of mint and cloud,
Between silence and time,
Between love's voice and spring.`,
        french: `Je t'aime entre l'ombre et l'âme,
Entre le parfum de la menthe et du nuage,
Entre le silence et le temps,
Entre la voix de l'amour et le printemps.`
    },
    {
        id: 60,
        title: "The Heart's Song",
        author: "William Blake",
        english: `Never pain to tell thy love,
Love that never told can be;
For the gentle wind doth move
Silently, invisibly.`,
        french: `Ne peine jamais à dire ton amour,
L'amour qui n'est jamais dit peut être;
Car le doux vent se déplace
Silencieusement, invisiblement.`
    },
    {
        id: 61,
        title: "Love's Eternal Dance",
        author: "Rabindranath Tagore",
        english: `Let your life lightly dance
On the edges of Time
Like dew on the tip of a leaf,
While my love watches you.`,
        french: `Laisse ta vie danser légèrement
Sur les bords du Temps
Comme la rosée sur la pointe d'une feuille,
Pendant que mon amour te regarde.`
    },
    {
        id: 62,
        title: "The Moon's Love",
        author: "Li Bai",
        english: `The moon above the eastern hill
Beckons me to follow still,
Like love that calls across the night,
A silver path of pure delight.`,
        french: `La lune au-dessus de la colline orientale
M'invite encore à suivre,
Comme l'amour qui appelle à travers la nuit,
Un chemin d'argent de pur délice.`
    },
    {
        id: 63,
        title: "Love's Reflection",
        author: "Emily Brontë",
        english: `Whatever our souls are made of,
His and mine are the same.
Like two mirrors facing,
Reflecting eternal flame.`,
        french: `De quoi que nos âmes soient faites,
La sienne et la mienne sont identiques.
Comme deux miroirs face à face,
Reflétant une flamme éternelle.`
    },
    {
        id: 64,
        title: "The Heart's Garden",
        author: "Christina Rossetti",
        english: `My heart is like a garden fair
Where many pleasant blossoms grow;
But you're the sweetest flower there,
The one I cherish so.`,
        french: `Mon cœur est comme un beau jardin
Où poussent de nombreuses fleurs plaisantes;
Mais tu es la plus douce fleur là-bas,
Celle que je chéris tant.`
    },
    {
        id: 65,
        title: "Love's Promise",
        author: "Robert Burns",
        english: `Till all the seas gang dry, my dear,
And the rocks melt wi' the sun;
I will love thee still, my dear,
While the sands o' life shall run.`,
        french: `Jusqu'à ce que toutes les mers s'assèchent, ma chère,
Et que les rochers fondent avec le soleil;
Je t'aimerai encore, ma chère,
Tant que les sables de la vie s'écouleront.`
    },
    {
        id: 66,
        title: "The Soul's Light",
        author: "John Donne",
        english: `More than kisses, letters mingle souls,
For thus, friends absent speak.
Love's mysteries in souls do grow,
But yet the body is the book.`,
        french: `Plus que les baisers, les lettres mêlent les âmes,
Car ainsi, les amis absents parlent.
Les mystères de l'amour grandissent dans les âmes,
Mais le corps reste le livre.`
    },
    {
        id: 67,
        title: "Love's Silence",
        author: "Sara Teasdale",
        english: `There will be stars over the place forever;
Though the house we loved and the street we loved are lost,
Every time the earth circles her orbit
I know you will be there.`,
        french: `Il y aura des étoiles au-dessus de l'endroit pour toujours;
Bien que la maison que nous aimions et la rue que nous aimions soient perdues,
Chaque fois que la terre fait son orbite
Je sais que tu seras là.`
    },
    {
        id: 68,
        title: "The Heart's Voice",
        author: "Paul Éluard",
        english: `On all the pages read
On all the blank pages
Stone blood paper or ash
I write your name.`,
        french: `Sur toutes les pages lues
Sur toutes les pages blanches
Pierre sang papier ou cendre
J'écris ton nom.`
    },
    {
        id: 69,
        title: "Love's Memory",
        author: "William Wordsworth",
        english: `For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude.`,
        french: `Car souvent, quand sur mon divan je repose
Dans un état vide ou pensif,
Ils surgissent dans cet œil intérieur
Qui est la béatitude de la solitude.`
    },
    {
        id: 70,
        title: "The Eternal Flame",
        author: "Lord Byron",
        english: `She walks in beauty, like the night
Of cloudless climes and starry skies;
And all that's best of dark and bright
Meet in her aspect and her eyes.`,
        french: `Elle marche dans la beauté, comme la nuit
Des climats sans nuages et des cieux étoilés;
Et tout ce qu'il y a de meilleur dans l'obscur et le lumineux
Se rencontre dans son aspect et ses yeux.`
    },
    {
        id: 71,
        title: "Love's Dawn",
        author: "Percy Bysshe Shelley",
        english: `The fountains mingle with the river
And the rivers with the ocean,
The winds of heaven mix forever
With a sweet emotion.`,
        french: `Les fontaines se mêlent à la rivière
Et les rivières à l'océan,
Les vents du ciel se mélangent pour toujours
Avec une douce émotion.`
    },
    {
        id: 72,
        title: "The Heart's Dream",
        author: "Alfred de Musset",
        english: `Take my heart, for it is yours,
Take my life, it beats for you,
Take my soul, forever pure,
Take my love, forever true.`,
        french: `Prends mon cœur, car il est tien,
Prends ma vie, elle bat pour toi,
Prends mon âme, à jamais pure,
Prends mon amour, à jamais vrai.`
    },
    {
        id: 73,
        title: "Love's Eternity",
        author: "Elizabeth Barrett Browning",
        english: `If thou must love me, let it be for naught
Except for love's sake only. Do not say
"I love her for her smile—her look—her way
Of speaking gently."`,
        french: `Si tu dois m'aimer, que ce soit pour rien
Excepté pour l'amour seulement. Ne dis pas
"Je l'aime pour son sourire—son regard—sa façon
De parler doucement."`
    },
    {
        id: 74,
        title: "The Soul's Dance",
        author: "Walt Whitman",
        english: `I celebrate myself, and sing myself,
And what I assume you shall assume,
For every atom belonging to me as good belongs to you,
My love, my eternal dance.`,
        french: `Je me célèbre, et je me chante,
Et ce que je suppose tu supposeras,
Car chaque atome m'appartenant t'appartient aussi bien,
Mon amour, ma danse éternelle.`
    },
    {
        id: 75,
        title: "Love's Light",
        author: "Emily Dickinson",
        english: `Hope is the thing with feathers
That perches in the soul,
And sings the tune without the words,
And never stops at all.`,
        french: `L'espoir est la chose avec des plumes
Qui se perche dans l'âme,
Et chante la mélodie sans les paroles,
Et ne s'arrête jamais.`
    },
    {
        id: 76,
        title: "The Heart's Whisper",
        author: "Charles Baudelaire",
        english: `My soul floats on perfumes
as other men's souls float on music,
In the deep blue of your eyes,
I find my paradise.`,
        french: `Mon âme flotte sur des parfums
comme l'âme des autres hommes flotte sur la musique,
Dans le bleu profond de tes yeux,
Je trouve mon paradis.`
    },
    {
        id: 77,
        title: "Love's Journey",
        author: "Rainer Maria Rilke",
        english: `Love consists in this,
that two solitudes protect
and touch and greet each other,
Like two stars in the night.`,
        french: `L'amour consiste en ceci,
que deux solitudes protègent
et touchent et se saluent,
Comme deux étoiles dans la nuit.`
    },
    {
        id: 78,
        title: "The Eternal Song",
        author: "Paul Verlaine",
        english: `Your soul is a chosen landscape
Where charming masqueraders and dancers
Are walking here and there,
Playing the lute and dancing.`,
        french: `Ton âme est un paysage choisi
Où vont des masques et des bergamasques charmants,
Jouant du luth et dansant,
Et quasi tristes sous leurs déguisements fantasques.`
    },
    {
        id: 79,
        title: "Love's Secret",
        author: "William Blake",
        english: `Never seek to tell thy love,
Love that never told can be;
For the gentle wind doth move
Silently, invisibly.`,
        french: `Ne cherche jamais à dire ton amour,
L'amour qui n'est jamais dit peut être;
Car le doux vent se déplace
Silencieusement, invisiblement.`
    },
    {
        id: 80,
        title: "The Heart's Promise",
        author: "Pablo Neruda",
        english: `I love you without knowing how, or when, or from where.
I love you straightforwardly, without complexities or pride;
So I love you because I know no other way than this:
Where I does not exist, nor you.`,
        french: `Je t'aime sans savoir comment, ni quand, ni d'où.
Je t'aime directement, sans complexités ni fierté;
Alors je t'aime parce que je ne connais pas d'autre façon que celle-ci:
Où je n'existe pas, ni toi.`
    },
    {
        id: 81,
        title: "Love's Reflection",
        author: "Oscar Wilde",
        english: `Yet each man kills the thing he loves
By each let this be heard,
Some do it with a bitter look,
Some with a flattering word.`,
        french: `Pourtant chaque homme tue ce qu'il aime
Que chacun entende ceci,
Certains le font avec un regard amer,
D'autres avec un mot flatteur.`
    },
    {
        id: 82,
        title: "The Soul's Flight",
        author: "Victor Hugo",
        english: `Be like the bird who,
Pausing in her flight
Awhile on boughs too slight,
Feels them give way beneath her,
And yet sings,
Knowing she hath wings.`,
        french: `Sois comme l'oiseau qui,
S'arrêtant dans son vol
Un moment sur des rameaux trop frêles,
Les sent plier sous lui,
Et chante pourtant,
Sachant qu'il a des ailes.`
    },
    {
        id: 83,
        title: "Love's Morning",
        author: "John Keats",
        english: `Bright star, would I were stedfast as thou art—
Not in lone splendour hung aloft the night
And watching, with eternal lids apart,
Like nature's patient, sleepless Eremite.`,
        french: `Étoile brillante, si je pouvais être constant comme toi—
Non pas dans la splendeur solitaire suspendue dans la nuit
Et regardant, les paupières éternellement écartées,
Comme l'ermite patient et sans sommeil de la nature.`
    },
    {
        id: 84,
        title: "The Heart's Song",
        author: "Christina Rossetti",
        english: `Remember me when I am gone away,
Gone far away into the silent land;
When you can no more hold me by the hand,
Nor I half turn to go yet turning stay.`,
        french: `Souviens-toi de moi quand je serai partie,
Partie loin dans le pays silencieux;
Quand tu ne pourras plus me tenir par la main,
Ni que je me retourne à moitié pour partir tout en restant.`
    },
    {
        id: 85,
        title: "Love's Eternity",
        author: "Alfred Tennyson",
        english: `Tis better to have loved and lost
Than never to have loved at all,
For love's light lingers even when
The darkness seems to fall.`,
        french: `Il vaut mieux avoir aimé et perdu
Que de n'avoir jamais aimé du tout,
Car la lumière de l'amour persiste même quand
L'obscurité semble tomber.`
    },
    {
        id: 86,
        title: "The Soul's Garden",
        author: "Rabindranath Tagore",
        english: `I cast my net into the sea,
alas, I caught only dreams;
But in your love, my dear,
I found all my dreams come true.`,
        french: `J'ai jeté mon filet dans la mer,
hélas, je n'ai attrapé que des rêves;
Mais dans ton amour, ma chère,
J'ai trouvé tous mes rêves devenus réalité.`
    },
    {
        id: 87,
        title: "Love's Dance",
        author: "Federico García Lorca",
        english: `Green, how I want you green.
Green wind. Green branches.
The ship out on the sea
and the horse on the mountain.`,
        french: `Vert, comme je te veux vert.
Vent vert. Branches vertes.
Le navire sur la mer
et le cheval sur la montagne.`
    },
    {
        id: 88,
        title: "The Heart's Echo",
        author: "Paul Éluard",
        english: `There is no world except in your eyes
All the words of love
All the words possible
To your love belong.`,
        french: `Il n'y a pas de monde sauf dans tes yeux
Tous les mots d'amour
Tous les mots possibles
À ton amour appartiennent.`
    },
    {
        id: 89,
        title: "Love's Whisper",
        author: "Arthur Rimbaud",
        english: `I have stretched ropes from steeple to steeple;
Garlands from window to window;
Golden chains from star to star,
And I dance in love's sweet shadow.`,
        french: `J'ai tendu des cordes de clocher à clocher;
Des guirlandes de fenêtre à fenêtre;
Des chaînes d'or d'étoile à étoile,
Et je danse dans la douce ombre de l'amour.`
    },
    {
        id: 90,
        title: "The Soul's Light",
        author: "Walt Whitman",
        english: `We were together. I forget the rest.
All else fades away and dims
In the bright light of your presence,
In the warm glow of your love.`,
        french: `Nous étions ensemble. J'oublie le reste.
Tout le reste s'estompe et s'assombrit
Dans la lumière vive de ta présence,
Dans la chaude lueur de ton amour.`
    },
    {
        id: 91,
        title: "Love's Promise",
        author: "Emily Dickinson",
        english: `That Love is all there is,
Is all we know of Love;
It is enough, the freight should be
Proportioned to the groove.`,
        french: `Que l'Amour est tout ce qu'il y a,
Est tout ce que nous savons de l'Amour;
C'est assez, le fardeau devrait être
Proportionné à la rainure.`
    },
    {
        id: 92,
        title: "The Heart's Journey",
        author: "Rumi",
        english: `Out beyond ideas of wrongdoing and rightdoing,
there is a field. I'll meet you there.
When the soul lies down in that grass,
the world is too full to talk about.`,
        french: `Au-delà des idées du bien et du mal,
il y a un champ. Je te retrouverai là-bas.
Quand l'âme se couche dans cette herbe,
le monde est trop plein pour en parler.`
    },
    {
        id: 93,
        title: "Love's Dawn",
        author: "Pablo Neruda",
        english: `I want to do with you
What spring does with the cherry trees,
Explode into a thousand flowers
And celebrate beauty.`,
        french: `Je veux faire avec toi
Ce que le printemps fait avec les cerisiers,
Exploser en mille fleurs
Et célébrer la beauté.`
    },
    {
        id: 94,
        title: "The Eternal Dance",
        author: "Kahlil Gibran",
        english: `When love beckons to you, follow him,
Though his ways are hard and steep.
And when his wings enfold you yield to him,
Though the sword hidden among his pinions may wound you.`,
        french: `Quand l'amour vous fait signe, suivez-le,
Bien que ses voies soient dures et escarpées.
Et quand ses ailes vous enveloppent, cédez-lui,
Bien que l'épée cachée parmi ses plumes puisse vous blesser.`
    },
    {
        id: 95,
        title: "Love's Memory",
        author: "William Butler Yeats",
        english: `Had I the heavens' embroidered cloths,
Enwrought with golden and silver light,
The blue and the dim and the dark cloths
Of night and light and the half-light.`,
        french: `Si j'avais les tissus brodés des cieux,
Tissés de lumière d'or et d'argent,
Les tissus bleus et sombres et obscurs
De la nuit et de la lumière et de la pénombre.`
    },
    {
        id: 96,
        title: "The Heart's Voice",
        author: "Anna Akhmatova",
        english: `I wrung my hands under my dark veil...
"Why are you pale, what makes you reckless?"
Because I have made my loved one drunk
with the bitter wine of betrayal.`,
        french: `J'ai tordu mes mains sous mon voile sombre...
"Pourquoi es-tu pâle, qu'est-ce qui te rend téméraire ?"
Parce que j'ai enivré mon bien-aimé
avec le vin amer de la trahison.`
    },
    {
        id: 97,
        title: "Love's Silence",
        author: "Paul Valéry",
        english: `The evening comes, the fields are still,
The tinkle of the thirsty rill,
Unheard all day, ascends again;
All silent now the reaper's strain.`,
        french: `Le soir vient, les champs sont calmes,
Le tintement du ruisseau assoiffé,
Inaudible tout le jour, monte à nouveau;
Tout silencieux maintenant le refrain du moissonneur.`
    },
    {
        id: 98,
        title: "The Soul's Dream",
        author: "Percy Bysshe Shelley",
        english: `Music, when soft voices die,
Vibrates in the memory;
Odours, when sweet violets sicken,
Live within the sense they quicken.`,
        french: `La musique, quand les douces voix meurent,
Vibre dans la mémoire;
Les odeurs, quand les douces violettes se fanent,
Vivent dans les sens qu'elles éveillent.`
    },
    {
        id: 99,
        title: "Love's Eternity",
        author: "John Donne",
        english: `I wonder, by my troth, what thou and I
Did, till we loved? Were we not weaned till then?
But sucked on country pleasures, childishly?
Or snorted we in the Seven Sleepers' den?`,
        french: `Je me demande, ma foi, ce que toi et moi
Faisions, jusqu'à ce que nous aimions ? N'étions-nous pas sevrés jusque-là ?
Mais tétions-nous les plaisirs champêtres, comme des enfants ?
Ou ronflions-nous dans l'antre des Sept Dormants ?`
    },
    {
        id: 100,
        title: "The Final Love",
        author: "Robert Frost",
        english: `Some say the world will end in fire,
Some say in ice.
From what I've tasted of desire
I hold with those who favor fire.`,
        french: `Certains disent que le monde finira
en feu,
D'autres en glace.
De ce que j'ai goûté du désir,
Je tiens avec ceux qui préfèrent le feu.`
    }
];

export default poems;