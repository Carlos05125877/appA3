import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationProps } from "./NavigationTypes";

interface SkillDetailScreenProps extends NavigationProps {
  route: {
    params: {
      skillName: string;
      skillImage: string;
      skillCategory: string;
    };
  };
}

const SkillDetailScreen: React.FC<SkillDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const { skillName, skillImage, skillCategory } = route.params;

  // Sample activities based on skill category
  const getActivities = (category: string) => {
    const baseActivities = [
      { id: 1, title: `Atividade 1 de ${skillName}`, level: "Básico" },
      { id: 2, title: `Atividade 2 de ${skillName}`, level: "Intermediário" },
      { id: 3, title: `Atividade 3 de ${skillName}`, level: "Avançado" },
    ];

    // Add category-specific activities
    if (category === "communication") {
      baseActivities.push({
        id: 4,
        title: "Prática de conversação",
        level: "Todos os níveis",
      });
    } else if (category === "social") {
      baseActivities.push({
        id: 4,
        title: "Interação em grupo",
        level: "Todos os níveis",
      });
    } else if (category === "cognitive") {
      baseActivities.push({
        id: 4,
        title: "Resolução de problemas",
        level: "Todos os níveis",
      });
    }

    return baseActivities;
  };

  const activities = getActivities(skillCategory);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{skillName}</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.skillInfoSection}>
          <Image source={{ uri: skillImage }} style={styles.skillImage} />
          <Text style={styles.skillDescription}>
            Desenvolva suas habilidades de {skillName.toLowerCase()} através de
            atividades interativas e divertidas.
          </Text>
        </View>

        <View style={styles.activitiesSection}>
          <Text style={styles.sectionTitle}>Atividades Disponíveis</Text>

          {activities.map((activity) => (
            <TouchableOpacity key={activity.id} style={styles.activityCard}>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityLevel}>
                  Nível: {activity.level}
                </Text>
              </View>
              <Text style={styles.startButton}>Iniciar →</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Seu Progresso</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "30%" }]} />
          </View>
          <Text style={styles.progressText}>30% Completo</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#87CEEB",
    paddingVertical: 16,
    paddingHorizontal: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    fontFamily: "Open Sans",
  },
  placeholder: {
    width: 50, // To balance the header
  },
  content: {
    flex: 1,
    padding: 20,
  },
  skillInfoSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  skillImage: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  skillDescription: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    lineHeight: 24,
    fontFamily: "Open Sans",
  },
  activitiesSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
    fontFamily: "Open Sans",
  },
  activityCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    fontFamily: "Open Sans",
  },
  activityLevel: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Open Sans",
  },
  startButton: {
    color: "#4CAF50",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "Open Sans",
  },
  progressSection: {
    marginBottom: 30,
  },
  progressBar: {
    height: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 10,
  },
  progressText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    fontFamily: "Open Sans",
  },
});

export default SkillDetailScreen;
