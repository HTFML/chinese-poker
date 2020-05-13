import React from 'react';
import { ScrollView, View, Text, ImageBackground, StyleSheet, PixelRatio } from 'react-native';
import background from '../../assets/parchment.jpg';

const RulesScreen = () => {
  return (
    <ScrollView>
      <ImageBackground style={styles.background} source={background}>
        <View style={styles.container}> 
          <View style={styles.heading}>
            <Text style={styles.title}>Learn To Play</Text>
          </View>
          <View style={styles.subcontainer}>
            <Text style={{...styles.text, fontWeight: 'bold'}}>Rules: </Text>
            <Text style={styles.text}>
              Cards may be played as singles or in groups of two, three or five (var. 1 and 8), in combinations which resemble poker hands. The leading card to a trick sets down the number of cards to be played; all the cards of a trick must contain the same number of cards. The highest ranking card is 2 instead of A. The combinations and their rankings are as follows, mostly based on poker hands.
            </Text>
          </View>
          <View style={styles.subcontainer}>
            <Text style={{...styles.text, fontWeight: 'bold'}}>Single Cards: </Text>
            <Text style={styles.text}>
              Any card from the deck, ordered by rank with suit being the tie-breaker. (For instance, A♠ beats A♥, which beats K♠.)
            </Text>
          </View>
          <View style={styles.subcontainer}>
            <Text style={{...styles.text, fontWeight: 'bold'}}>Pairs: </Text>
            <Text style={styles.text}>
              Any two cards of matching rank, ordered as with singular cards by the card of the higher suit. (A pair consisting of the K♠ and K♣ beats a pair consisting of K♥ and K♦.)
            </Text>
          </View>
          <View style={styles.subcontainer}>
            <Text style={{...styles.text, fontWeight: 'bold'}}>Triples: </Text>
            <Text style={styles.text}>
              Three equal ranked cards, three twos are highest, then aces, kings, etc. down to three threes, which is the lowest triple. In some variations, a triple can only be played as part of a five-card hand.
            </Text>
          </View>
          <View style={styles.subcontainer}>
            <Text style={{...styles.text, fontWeight: 'bold'}}>Five Card Hands: </Text>
            <Text style={styles.text}>
              There are five (var. 2) different valid five-card hands, ranking from low to high as follows (the same ranking as in poker, where applicable):
            </Text>
            <Text style={styles.subText}>
              <Text style={{fontWeight: 'bold'}}>Straight: </Text>
              <Text>
                (also known as a snake in Cantonese or mokke in Malaysia): Any 5 cards in a sequence (but not all of the same suit). Rank is determined by the value of the biggest card, with the suit used only as a tie-breaker. Therefore "3-4-5-6-7" is less than "2-3-4-5-6", since 2 is considered the largest card in the 2-3-4-5-6 straight. The largest straight is A-2-3-4-5, second 2-3-4-5-6, third 10-J-Q-K-A while the smallest straight is 3-4-5-6-7.
              </Text>
            </Text>
            <Text style={styles.subText}>
              <Text style={{fontWeight: 'bold'}}>Flush: </Text>
              <Text>
                (also known as a flower or sama bunga in Malaysia): Any 5 cards of the same suit (but not in a sequence). Rank is determined by Face value of the cards (highest first, then each lower card in order). Suit (♠,♥,♣,♦) is used to break ties. In some popular variations, flushes are not permitted as a playable hand, and thus it is the lowest possible combination.
              </Text>
            </Text>
            <Text style={styles.subText}>
              <Text style={{fontWeight: 'bold'}}>Full House: </Text>
              <Text>
                a composite of a three-of-a-kind combination and a pair. Rank is determined by the value of the triple, regardless of the value of the pair. Also known as a Fullen.
              </Text>
            </Text>
            <Text style={styles.subText}>
              <Text style={{fontWeight: 'bold'}}>Four-of-a-kind + One card: </Text>
              <Text>
                (nicknamed King Kong, tiki, or Bomb or ampat batang in Malaysia): Any set of 4 cards of the same rank, plus any 5th card. (A four-of-a-kind cannot be played unless it is played as a five-card hand) Rank is determined by the value of the 4 card set, regardless of the value of the 5th card. It is also known as a poker. (Some play the Four-of-a-kind hand as the beat all, therefore nicknamed the bomb, King Kong, or also tiki.). In some variations, when a bomb was dealt, it immediately makes the 2s to be the lowest cards in the game (with 2 of diamonds becoming the lowest)
              </Text>
            </Text>
            <Text style={styles.subText}>
              <Text style={{fontWeight: 'bold'}}>Straight Flush: </Text>
              <Text>
                A composite of the straight and the flush: five cards in sequence in the same suit. Ranked the same as straights, suit being a tie-breaker. (Sometimes also called a "bomb" (or tiki or sunn) in Malaysia, greater than a four-of-a-kind)
                The dealer (who may be chosen by cutting the cards, as usual) shuffles the deck to begin with and begins dealing out the cards singly, starting with the person of his right, in a counter-clockwise manner around the table. The cards are dealt out among the players as far as they can go while retaining an equal number of cards for each player. Leftover cards (not possible if there are 4 players) are then given to the player holding the 3♦. If this card is in the kitty, then the holder of the next lowest card adds them to his pile (var. 5). The Joker cards are not used under normal rules and is taken out before dealing.
              </Text>
            </Text>
          </View>
          <View style={styles.subcontainer}>
            <Text style={{...styles.text, fontWeight: 'bold'}}>Playing the Game: </Text>
            <Text style={styles.text}>
              At the beginning of each game, the player with the 3♦ (var. 6 and 9) starts by either playing it singly or as part of a combination, leading to the first trick. Play proceeds counter-clockwise, with normal climbing-game rules applying: each player must play a higher card or combination than the one before, with the same number of cards. Players may also pass, thus declaring that s/he does not want to play (or does not hold the necessary cards to make a play possible). A pass does not hinder any further play in the game, each being independent, referred to as jumping-back. (var. 14).
              When all but one of the players have passed in succession the trick is over (some variations have when 1 player has passed the trick is over), and the cards are gathered up and a new trick is started with all players, initiated by the last player to play. When a player plays the 2♠ either as a single or as part of a pair of 2s, it is often customary for that player to start the next trick immediately by leading a new card or combination, since the 2♠ cannot be beaten whether as a single or as part of a pair of 2s, and the passes are mere formalities.
              It is often courteous for a player to warn others when he/she is one playing combination away from winning.
            </Text>
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.text}>
              The goal is, then, for the other players to play (and get rid of) as many cards as possible while avoiding the combination that would allow the calling player to win the game. For example, if the said player has one last single card, the other players would play doubles or other combinations to force him/her to pass.
            </Text>
          </View>
            {/* The game ends when one player runs out of cards.
            Refer to scoring section.
            In most popular variations, ending with a single or double two is not allowed. */}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: 'space-between'
  },
  subcontainer: {
    margin: 5
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading: {
    margin: PixelRatio.getPixelSizeForLayoutSize(8)
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  text: {
    fontSize: 16
  },
  subText: {
    marginRight: 20,
    padding: 10,
    fontSize: 14,
  }
})

export default RulesScreen;