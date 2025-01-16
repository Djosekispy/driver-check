import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  documentButton: {
    marginTop: 8,
    backgroundColor: '#3b82f6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  
  documentText: {
    fontSize: 14,
    color: '#ffffff',
  },  
  headerLeft: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  userPhone: {
    fontSize: 14,
    color: '#6b7280',
  },
  userAddress: {
    fontSize: 14,
    color: '#9ca3af',
  },
  headerStatus: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    marginTop: 16,
  },
  listItem: {
    marginBottom: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  listHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginLeft: 8,
  },
  collapseContent: {
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  collapseText: {
    fontSize: 14,
    color: '#6b7280',
  },
});
