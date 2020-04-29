import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { styles } from '../styles.js';
import Background from '../../assets/parchment.jpg';


const RulesScreen = ({ navigation }) => {
return (

<ScrollView style={styles.mainContainer}>

<Text style={{backgroundImage:`url(${Background})`}}> 
<Text style={{fontWeight: "bold"}}>Rules: </Text>
Cards may be played as singles or in groups of two, three or five (var. 1 and 8), in combinations which resemble poker hands. The leading card to a trick sets down the number of cards to be played; all the cards of a trick must contain the same number of cards. The highest ranking card is 2 instead of A. The combinations and their rankings are as follows, mostly based on poker hands.
{"\n"}
{"\n"}
<Text style={{fontWeight: "bold"}}>Single Cards: </Text>
 Any card from the deck, ordered by rank with suit being the tie-breaker. (For instance, A♠ beats A♥, which beats K♠.)
{"\n"}
{"\n"}
<Text style={{fontWeight: "bold"}}>Pairs: </Text>
 Any two cards of matching rank, ordered as with singular cards by the card of the higher suit. (A pair consisting of the K♠ and K♣ beats a pair consisting of K♥ and K♦.)
{"\n"}
{"\n"}
<Text style={{fontWeight: "bold"}}>Triples: </Text>
Three equal ranked cards, three twos are highest, then aces, kings, etc. down to three threes, which is the lowest triple. In some variations, a triple can only be played as part of a five-card hand.
{"\n"}
{"\n"}

<Text style={{fontWeight: "bold"}}>Five Card Hands: </Text>
 There are five (var. 2) different valid five-card hands, ranking from low to high as follows (the same ranking as in poker, where applicable):
{"\n"}
{"\n"}
<Text style={{fontWeight: "bold"}}>Straight: </Text>
(also known as a snake in Cantonese or mokke in Malaysia): Any 5 cards in a sequence (but not all of the same suit). Rank is determined by the value of the biggest card, with the suit used only as a tie-breaker. Therefore "3-4-5-6-7" is less than "2-3-4-5-6", since 2 is considered the largest card in the 2-3-4-5-6 straight. The largest straight is A-2-3-4-5, second 2-3-4-5-6, third 10-J-Q-K-A while the smallest straight is 3-4-5-6-7.
{"\n"}
{"\n"}
<Text style={{fontWeight: "bold"}}>Flush: </Text>
 (also known as a flower or sama bunga in Malaysia): Any 5 cards of the same suit (but not in a sequence). Rank is determined by Face value of the cards (highest first, then each lower card in order). Suit (♠,♥,♣,♦) is used to break ties. In some popular variations, flushes are not permitted as a playable hand, and thus it is the lowest possible combination.
{"\n"}
{"\n"}


<Text style={{fontWeight: "bold"}}>Full House: </Text>
 a composite of a three-of-a-kind combination and a pair. Rank is determined by the value of the triple, regardless of the value of the pair. Also known as a Fullen.
{"\n"}
{"\n"}
<Text style={{fontWeight: "bold"}}>Four-of-a-kind + One card:  </Text>
(nicknamed King Kong, tiki, or Bomb or ampat batang in Malaysia): Any set of 4 cards of the same rank, plus any 5th card. (A four-of-a-kind cannot be played unless it is played as a five-card hand) Rank is determined by the value of the 4 card set, regardless of the value of the 5th card. It is also known as a poker. (Some play the Four-of-a-kind hand as the beat all, therefore nicknamed the bomb, King Kong, or also tiki.). In some variations, when a bomb was dealt, it immediately makes the 2s to be the lowest cards in the game (with 2 of diamonds becoming the lowest)
{"\n"}
{"\n"}
<Text style={{fontWeight: "bold"}}>Straight flush:  </Text>
A composite of the straight and the flush: five cards in sequence in the same suit. Ranked the same as straights, suit being a tie-breaker. (Sometimes also called a "bomb" (or tiki or sunn) in Malaysia, greater than a four-of-a-kind)
The dealer (who may be chosen by cutting the cards, as usual) shuffles the deck to begin with and begins dealing out the cards singly, starting with the person of his right, in a counter-clockwise manner around the table. The cards are dealt out among the players as far as they can go while retaining an equal number of cards for each player. Leftover cards (not possible if there are 4 players) are then given to the player holding the 3♦. If this card is in the kitty, then the holder of the next lowest card adds them to his pile (var. 5). The Joker cards are not used under normal rules and is taken out before dealing.

{"\n"}
{"\n"}

At the beginning of each game, the player with the 3♦ (var. 6 and 9) starts by either playing it singly or as part of a combination, leading to the first trick. Play proceeds counter-clockwise, with normal climbing-game rules applying: each player must play a higher card or combination than the one before, with the same number of cards. Players may also pass, thus declaring that s/he does not want to play (or does not hold the necessary cards to make a play possible). A pass does not hinder any further play in the game, each being independent, referred to as jumping-back. (var. 14).
When all but one of the players have passed in succession the trick is over (some variations have when 1 player has passed the trick is over), and the cards are gathered up and a new trick is started with all players, initiated by the last player to play. When a player plays the 2♠ either as a single or as part of a pair of 2s, it is often customary for that player to start the next trick immediately by leading a new card or combination, since the 2♠ cannot be beaten whether as a single or as part of a pair of 2s, and the passes are mere formalities.
It is often courteous for a player to warn others when he/she is one playing combination away from winning. 
{"\n"}
{"\n"}
The goal is, then, for the other players to play (and get rid of) as many cards as possible while avoiding the combination that would allow the calling player to win the game. For example, if the said player has one last single card, the other players would play doubles or other combinations to force him/her to pass.
{"\n"}
{"\n"}
The game ends when one player runs out of cards.
{"\n"}
Refer to scoring section.
{"\n"}
{"\n"}
In most popular variations, ending with a single or double two is not allowed.
</Text>

<Button title="Go to Home"
        onPress={() => navigation.navigate('Home')}> 
</Button>

</ScrollView>
);
}

export default RulesScreen;