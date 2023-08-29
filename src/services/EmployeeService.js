// Importation du module 'axios' qui permet de faire des requêtes HTTP
import axios from "axios";

// URL de base de l'API des employés
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees/";

// Définition d'une classe nommée 'EmployeeService'
class EmployeeService {
  // Méthode pour récupérer la liste des employés
  getEmployees() {
    // Envoi une requête HTTP GET à l'API des employés à l'aide d'axios
    // et retourne la réponse obtenue sous la forme d'un objet 'Promise'
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
}

// Instanciation de la classe 'EmployeeService'
const EmployeeServices = new EmployeeService();

// Exportation de l'instance de la classe 'EmployeeService'
// pour être utilisée dans d'autres parties du code
export default EmployeeServices;
