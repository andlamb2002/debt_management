class ChangeStatusInDebts < ActiveRecord::Migration[8.1]
  def change
    change_column :debts, :status, :string, default: 'active'
  end
end
