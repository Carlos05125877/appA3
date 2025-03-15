import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ProgressBar from "./ProgressBar";
import HomeSelect from "./HomeSelect";
import { NavigationProps } from "./NavigationTypes";

function HomeScreen({ navigation }: NavigationProps) {
  const handleSkillPress = (
    skillName: string,
    skillImage: string,
    skillCategory: string
  ) => {
    navigation.navigate("SkillDetail", {
      skillName,
      skillImage,
      skillCategory,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/86ff797f57ba475e357f546d60996d2ed0d2e62b",
          }}
          style={styles.menuIcon}
          accessibilityLabel="menu"
        />
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7951d6fc249c6724edae1639f30d9aa6ad09f1ca",
          }}
          style={[styles.logoIcon, { paddingRight: 55 }]}
          accessibilityLabel="Frame 17"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.progressSection}>
          <View style={styles.progressTitleContainer}>
            <Text style={styles.progressTitle}>Seu progresso</Text>
          </View>
          <ProgressBar progress={0} />
        </View>
        <View style={styles.skillsGrid}>
          <View style={styles.skillsRow}>
            <HomeSelect
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/22a61c8c1ebabffcbbe0526ae0489d9993f35969"
              label="Comunicação"
              onPress={() =>
                handleSkillPress(
                  "Comunicação",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/22a61c8c1ebabffcbbe0526ae0489d9993f35969",
                  "communication"
                )
              }
            />
            <HomeSelect
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8a43ae6d80e75304f34ed7cebe704dc5b30c9f5b"
              label="Sociais"
              onPress={() =>
                handleSkillPress(
                  "Sociais",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/8a43ae6d80e75304f34ed7cebe704dc5b30c9f5b",
                  "social"
                )
              }
            />
            <HomeSelect
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c431628fbd619faaf5cd80b700c8bb8bf7f21a"
              label="Cognitivas"
              onPress={() =>
                handleSkillPress(
                  "Cognitivas",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/f7c431628fbd619faaf5cd80b700c8bb8bf7f21a",
                  "cognitive"
                )
              }
            />
          </View>
          <View style={styles.skillsRow}>
            <HomeSelect
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/19e184d620f8332bafc79943293c03c60612302a"
              label="Motoras"
              fontFamily="Open Sans"
              onPress={() =>
                handleSkillPress(
                  "Motoras",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/19e184d620f8332bafc79943293c03c60612302a",
                  "motor"
                )
              }
            />
            <HomeSelect
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/efb2bdff38649e9d8abc2dc07d4eebbc35c2f9dc"
              label="Sensoriais"
              fontFamily="Open Sans"
              onPress={() =>
                handleSkillPress(
                  "Sensoriais",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/efb2bdff38649e9d8abc2dc07d4eebbc35c2f9dc",
                  "sensory"
                )
              }
            />
            <HomeSelect
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/286ae76b82abc5d2542585f7cdb74a1be0627ff6"
              label="Acadêmicas"
              fontFamily="Open Sans"
              onPress={() =>
                handleSkillPress(
                  "Acadêmicas",
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/286ae76b82abc5d2542585f7cdb74a1be0627ff6",
                  "academic"
                )
              }
            />
          </View>
        </View>
        <View style={styles.emotionalSkillContainer}>
          <HomeSelect
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/65247aa431ece9b03237bbdae14262c9b2be3d9b"
            label="Emocionais"
            fontFamily="Open Sans"
            onPress={() =>
              handleSkillPress(
                "Emocionais",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/65247aa431ece9b03237bbdae14262c9b2be3d9b",
                "emotional"
              )
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#87CEEB",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 100,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,

  },
  menuIcon: {
    width: 40,
    height: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  logoIcon: {
    width: 107,
    height: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  content: {
    width: "100%",
    maxWidth: 332,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 0,
    paddingRight: 0,
  },
  progressSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 13,
    marginBottom: 92,
  },
  progressTitleContainer: {
    marginBottom: 13,
  },
  progressTitle: {
    color: "#333333",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  skillsGrid: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skillsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 18,
  },
  emotionalSkillContainer: {
    marginTop: 30,
  },
});

export default HomeScreen;
