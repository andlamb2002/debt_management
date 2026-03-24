class AddOrganizationToDebts < ActiveRecord::Migration[8.1]
  def change
    add_reference :debts, :organization, null: false, foreign_key: true
  end
end
